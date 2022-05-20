import { useQuery } from 'react-query'

import { getDiseaseDataFiltered } from 'services'
import { useAppSelector } from 'hooks/useAppSelector'
import { getSearchText } from 'states/system'
import { fuzzyMatchingRegExp } from 'utils'

export const useFilteredQuery = () => {
  const searchText = useAppSelector(getSearchText)
  const fuzzyRegExpString = fuzzyMatchingRegExp(searchText)
  const { data } = useQuery(['#diseaseData', searchText], () => getDiseaseDataFiltered(searchText), {
    refetchOnWindowFocus: false,
    suspense: true,
    useErrorBoundary: true,
    staleTime: 60000,
    cacheTime: Infinity,
    enabled: searchText !== '',
    onSuccess: () => {
      // 과제 요구사항 중 콘솔에 출력하는 부분이 있기 때문에 Eslint 무시 설정
      // eslint-disable-next-line no-console
      console.log('fetched')
    },
  })

  return { data, fuzzyRegExpString }
}

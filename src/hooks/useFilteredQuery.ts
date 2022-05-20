import { useQuery } from 'react-query'

import { getDiseaseDataFiltered } from 'services'
import { useAppSelector } from 'hooks/useAppSelector'
import { fuzzyMatchingRegExp } from 'utils'
import { getSearchValue } from 'states/search'

export const useFilteredQuery = () => {
  const searchValue = useAppSelector(getSearchValue)
  const fuzzyRegExpString = fuzzyMatchingRegExp(searchValue)
  const { data } = useQuery(['#diseaseData', searchValue], () => getDiseaseDataFiltered(searchValue), {
    refetchOnWindowFocus: false,
    suspense: true, // TODO: suspense 필요 없다면 삭제 가능
    useErrorBoundary: true, // TODO: Error boundary 필요 없다면 삭제 가능
    staleTime: 60000,
    cacheTime: Infinity,
    enabled: searchValue !== '',
    onSuccess: () => {
      // 과제 요구사항 중 콘솔에 출력하는 부분이 있기 때문에 Eslint 무시 설정
      // eslint-disable-next-line no-console
      console.log('fetched')
    },
  })

  return { data, fuzzyRegExpString }
}

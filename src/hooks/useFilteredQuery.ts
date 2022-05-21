import { useQuery } from 'react-query'

import { getDiseaseDataFiltered } from 'services'
import { useAppSelector } from 'hooks/useAppSelector'
import { fuzzyMatchingRegExp } from 'utils'
import { getIsApiBlocked } from 'states/dropdown'
import { getSearchValue } from 'states/search'

export const useFilteredQuery = () => {
  const searchValue = useAppSelector(getSearchValue)
  const isApiBlocked = useAppSelector(getIsApiBlocked)
  const fuzzyRegExpString = fuzzyMatchingRegExp(searchValue)
  const { data } = useQuery(['#diseaseData', searchValue], () => getDiseaseDataFiltered(searchValue), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    enabled: !!searchValue.trim() && !isApiBlocked,
    onSuccess: () => {
      // 과제 요구사항 중 콘솔에 출력하는 부분이 있기 때문에 Eslint 무시 설정
      // eslint-disable-next-line no-console
      console.log('fetched')
    },
  })

  return { data, fuzzyRegExpString }
}

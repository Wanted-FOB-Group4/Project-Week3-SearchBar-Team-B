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
      console.log('fetched')
    },
  })

  return { data, fuzzyRegExpString }
}

import { useAppSelector, useFilteredQuery } from 'hooks'
import { getDropdownState } from 'states/dropdown'

import SearchBar from './SearchForm'
import Dropdown from './Dropdown'
import styles from './Search.module.scss'
import { IDiseaseDataItem } from 'types/types'

const Search = () => {
  const dropdownOpen = useAppSelector(getDropdownState)
  const { data, fuzzyRegExpString } = useFilteredQuery()
  const diseaseData: IDiseaseDataItem[] = data || []

  return (
    <main className={styles.container}>
      <div className={styles.searchFormWrapper}>
        <SearchBar dataLength={diseaseData.length} />
        {dropdownOpen && <Dropdown diseaseData={diseaseData} fuzzyRegExpString={fuzzyRegExpString} />}
      </div>
    </main>
  )
}

export default Search

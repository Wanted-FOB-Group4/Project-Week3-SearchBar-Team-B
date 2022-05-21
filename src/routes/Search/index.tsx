import { useAppSelector, useFilteredQuery } from 'hooks'
import { getDropdownState } from 'states/dropdown'
import { IDiseaseDataItem } from 'types/types'

import SearchForm from './SearchForm'
import Dropdown from './Dropdown'

import styles from './Search.module.scss'

const Search = () => {
  const dropdownOpen = useAppSelector(getDropdownState)

  const { data, fuzzyRegExpString } = useFilteredQuery()
  const diseaseData: IDiseaseDataItem[] = data || []

  return (
    <main className={styles.container}>
      <div className={styles.searchFormWrapper}>
        <SearchForm dataLength={diseaseData.length} />
        {dropdownOpen && <Dropdown diseaseData={diseaseData} fuzzyRegExpString={fuzzyRegExpString} />}
      </div>
    </main>
  )
}

export default Search

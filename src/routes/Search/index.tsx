import store from 'store'

import { useAppSelector, useFilteredQuery } from 'hooks'
import { getCategory, getDropdownState } from 'states/dropdown'
import { IDiseaseDataItem } from 'types/types'

import SearchForm from './SearchForm'
import Dropdown from './Dropdown'

import styles from './Search.module.scss'

const Search = () => {
  const dropdownOpen = useAppSelector(getDropdownState)
  const category = useAppSelector(getCategory)

  const { data, fuzzyRegExpString } = useFilteredQuery()
  const diseaseData: IDiseaseDataItem[] = (category !== 'searchLog' ? data : store.get('searchedLog')) || []
  const dataLength = diseaseData.length <= 6 ? diseaseData.length : 6

  return (
    <main className={styles.container}>
      <div className={styles.searchFormWrapper}>
        <SearchForm dataLength={dataLength} />
        {dropdownOpen && <Dropdown diseaseData={diseaseData} fuzzyRegExpString={fuzzyRegExpString} />}
      </div>
    </main>
  )
}

export default Search

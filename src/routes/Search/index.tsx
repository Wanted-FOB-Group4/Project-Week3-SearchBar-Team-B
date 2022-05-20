import { useRecoil } from 'hooks/state'
import { dropdownOpenState } from 'states/dropdown'

import SearchBar from './SearchForm'
import Dropdown from './Dropdown'
import styles from './Search.module.scss'

const Search = () => {
  const [isDropdownOpen] = useRecoil(dropdownOpenState)

  return (
    <main className={styles.container}>
      <div className={styles.searchFormWrapper}>
        <SearchBar />
        {isDropdownOpen && <Dropdown />}
      </div>
    </main>
  )
}

export default Search

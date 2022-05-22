import { HumanIcon } from 'assets/svgs'
import Modal from 'components/Modal'
import Search from './Search'

import styles from './SearchPage.module.scss'

const MAIN_TEXT = { first: '국내 모든 임상시험 검색하고', second: '온라인으로 참여하기' }
const INFO_TEXT = { title: '새로운 임상시험이 등록되면 문자로 알려드려요', button: '임상시험 소식받기' }

const SearchPage = () => {
  return (
    <div className={styles.searchWrapper}>
      <Modal />
      <section className={styles.searchContainer}>
        <h2 className={styles.mainTextWrapper}>
          <span className={styles.mainText}>{MAIN_TEXT.first}</span>
          <span className={styles.mainText}>{MAIN_TEXT.second}</span>
        </h2>
        <Search />
      </section>
      <section className={styles.additionalInfo}>
        <div className={styles.infoContents}>
          <div className={styles.infoTextContiner}>
            <span className={styles.infoText}>{INFO_TEXT.title}</span>
            <button className={styles.button} type='button'>
              <div className={styles.buttonText}>{INFO_TEXT.button}</div>
            </button>
          </div>
          <HumanIcon />
        </div>
      </section>
    </div>
  )
}

export default SearchPage

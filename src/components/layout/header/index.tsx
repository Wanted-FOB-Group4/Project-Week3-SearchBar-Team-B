import { HeaderLogo } from 'assets/svgs'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.contents}>
        <HeaderLogo className={styles.logo} />
        <nav className={styles.nav}>
          <ul className={styles.navItemContainer}>
            <li>
              <button type='button' className={styles.button}>
                소식받기
              </button>
            </li>
            <li>
              <button type='button' className={styles.button}>
                제휴/문의
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

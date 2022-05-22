import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

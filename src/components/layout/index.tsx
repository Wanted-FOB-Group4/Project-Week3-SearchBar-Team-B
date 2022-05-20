import styles from './layout.module.scss'
import Footer from 'components/layout/footer'
import { Outlet } from 'react-router-dom'
import Header from './header'

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

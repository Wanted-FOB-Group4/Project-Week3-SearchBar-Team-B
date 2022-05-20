import styles from './footer.module.scss'
import cx from 'classnames'

const FOOTER_MAIN_TEXT = {
  Title: '(주)휴먼스케이프',
  Address: '서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자: 장민후',
  Copyright: '© 2021 Humanscape, All rights reserved.',
}

const FOOTER_SUB_TEXT = {
  Sub1: '개인정보처리방침',
  Sub2: 'Living healthier by connecting better',
}

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.contentsWrapper}>
        <div className={styles.mainContents}>
          <div className={cx(styles.mainText, styles.title)}>{FOOTER_MAIN_TEXT.Title}</div>
          <div className={styles.mainText}>{FOOTER_MAIN_TEXT.Address}</div>
          <div className={styles.mainText}>{FOOTER_MAIN_TEXT.Copyright}</div>
        </div>
        <div className={styles.subContents}>
          <div className={styles.subTitle}>{FOOTER_SUB_TEXT.Sub1}</div>
          <div className={styles.subText}>{FOOTER_SUB_TEXT.Sub2}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

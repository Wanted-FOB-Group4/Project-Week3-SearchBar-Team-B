import cx from 'classnames'

import styles from './Footer.module.scss'

const FOOTER_MAIN_TEXT = {
  Title: '(주)휴먼스케이프',
  Address: '서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자: 장민후',
  Copyright: '© 2021 Humanscape, All rights reserved.',
}

const FOOTER_SUB_TEXT = {
  Sub1: '개인정보처리방침',
  Sub2: 'Living healthier by connecting better',
  Sub3: '과제 제출용 페이지',
}

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.contentsWrapper}>
        <div className={styles.mainContents}>
          <span className={cx(styles.mainText, styles.title)}>{FOOTER_MAIN_TEXT.Title}</span>
          <span className={styles.mainText}>{FOOTER_MAIN_TEXT.Address}</span>
          <span className={styles.mainText}>{FOOTER_MAIN_TEXT.Copyright}</span>
        </div>
        <div className={styles.subContents}>
          <span className={styles.subTitle}>{FOOTER_SUB_TEXT.Sub1}</span>
          <span className={styles.subText}>{FOOTER_SUB_TEXT.Sub2}</span>
          <span className={cx(styles.subText, styles.notification)}>{FOOTER_SUB_TEXT.Sub3}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

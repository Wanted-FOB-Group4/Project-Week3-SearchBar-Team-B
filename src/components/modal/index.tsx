import styles from './modal.module.scss'
import cx from 'classnames'
import React, { useRef } from 'react'
import reactDom from 'react-dom'
import { useAppSelector } from 'hooks/useAppSelector'
import { getModalState, setModalState } from 'states/modal'
import { useAppDispatch } from 'hooks/useAppDispatch'

interface IPortal {
  children?: React.ReactNode
}
// TODO : esc 눌렀을때 모달 닫히도록 동작

const Modal = () => {
  const ModalPortal = ({ children }: IPortal) => {
    const el = document.getElementById('modal')
    return reactDom.createPortal(children, el!)
  }

  const dispatch = useAppDispatch()
  const modalState = useAppSelector(getModalState)
  const { modalOpen, title } = modalState

  const backDropRef = useRef<HTMLElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const closeState = { modalOpen: false, title: '' }

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (backDropRef.current === e.target || closeBtnRef.current === e.target) dispatch(setModalState(closeState))
  }

  const handleKeyBoardClose = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') dispatch(setModalState(closeState))
  }

  return (
    <ModalPortal>
      <section
        role='button'
        tabIndex={0}
        ref={backDropRef}
        className={cx(styles.modalBackDrop, { [styles.open]: modalOpen })}
        onClick={closeModal}
        onKeyDown={handleKeyBoardClose}
      >
        <div className={styles.modalWrapper}>
          <div className={styles.modalHeader}>
            <button className={styles.closeBtn} type='button'>
              <span className={styles.closeBtnText} ref={closeBtnRef}>
                X
              </span>
            </button>
          </div>
          <section className={styles.modalContent}>
            <div className={styles.contentWrapper}>
              <div className={styles.title}>{title}</div>
              <span>을 검색하셨습니다.</span>
            </div>
          </section>
        </div>
      </section>
    </ModalPortal>
  )
}

export default Modal
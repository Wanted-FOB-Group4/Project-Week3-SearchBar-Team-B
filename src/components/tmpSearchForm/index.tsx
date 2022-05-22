import styles from './searchForm.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useState, ChangeEvent, SyntheticEvent } from 'react'
import { setModalState } from 'states/modal'

const TmpSearchForm = () => {
  const [keyWord, setKeyWord] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const openState = { modalOpen: true, title: keyWord }
    dispatch(setModalState(openState))
  }

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setKeyWord(value)
  }

  return (
    <div className={styles.searchFormWrapper}>
      <form onSubmit={handleSubmit}>
        <input placeholder='search' onChange={handleChangeKeyword} value={keyWord} />
      </form>
    </div>
  )
}

export default TmpSearchForm

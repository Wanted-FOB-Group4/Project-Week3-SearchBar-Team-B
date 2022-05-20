import styles from './searchForm.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import React, { useState } from 'react'
import { setModalState } from 'states/modal'

const SearchForm = () => {
  const [keyWord, setKeyWord] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const openState = { modalOpen: true, title: keyWord }
    dispatch(setModalState(openState))
  }

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default SearchForm

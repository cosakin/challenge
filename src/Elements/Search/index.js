import React, { useEffect } from 'react'
import SearchIcon from '@Elements/Icons/Search'
import styles from './style.module.scss'
import { connect, useDispatch } from 'react-redux'
import { filterByTitle } from 'src/Redux/Actions'

function Search() {
  let input = ''
  const dispatch = useDispatch()
  const filterByValue = (e) => {
    input = e.target.value
    console.log(input)
    dispatch(filterByTitle({ value: input }))
  }
  useEffect(() => {
    dispatch(filterByTitle({ value: input }))
  }, [])
  return (
    <div className={styles.searchBox}>
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            filterByValue(e)
          }}
        />
        <button className={styles.searchbtn}>
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

export default Search

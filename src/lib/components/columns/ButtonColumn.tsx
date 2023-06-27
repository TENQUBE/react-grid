import React, { FC } from 'react'
import styles from '../../styles/column.scss'

interface IProps {
  rowIdx: number
  columnIdx: number
  value: string
  callback: Function
}

const ButtonColumn: FC<IProps> = ({ value, rowIdx, columnIdx, callback }) => {

  const handleClick = () => {
    callback(rowIdx, columnIdx)
  }

  return (
    <div className={styles['button-area']}>
      <button 
        className={`${styles['button']} button`}
        onClick={handleClick}
      >
        { value }
      </button>
    </div>
  )
}

export default ButtonColumn
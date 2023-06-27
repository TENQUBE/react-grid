import React, { FC } from 'react'
import styles from '../../styles/column.scss'

interface IProps {
  rowIdx: number
  columnIdx: number
  value: boolean
  callback?: Function
}

const CheckColumn: FC<IProps> = ({ rowIdx, columnIdx, value, callback }) => {

  const handleClickCheck = () => {
    if(callback) callback(false, rowIdx, columnIdx)
  }

  return (
    <div className={styles['checkbox-area']}>
      <div 
        className={value ? `${styles['checkbox']} ${styles['active']} checkbox active` : `${styles['checkbox']} checkbox`}
        onClick={handleClickCheck} 
      />
    </div>
  )
}

export default CheckColumn
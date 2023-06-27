import React, { FC } from 'react'
import styles from '../../styles/column.scss'

interface IProps {
  rowIdx: number
  columnIdx: number
  isActive: boolean
  callback?: Function
}

const ToggleColumn: FC<IProps> = ({ rowIdx, columnIdx, isActive, callback }) => {

  const handleClickToggle = () => {
    if(callback) callback(rowIdx, columnIdx)
  }

  return (
    <div className={styles['toggle-area']}>
      <div 
        className={isActive ? `${styles['toggle']} ${styles['active']} toggle active` : `${styles['toggle']} toggle`} 
        onClick={handleClickToggle}/>
    </div>
  )
}

export default ToggleColumn
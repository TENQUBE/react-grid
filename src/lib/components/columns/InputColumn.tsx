import React, { ChangeEvent, FC } from 'react'
import styles from '../../styles/column.scss'

interface IProps {
  rowIdx: number
  columnIdx: number
  type: 'text' | 'number'
  value: string | number
  callback: Function
}

const InputColumn: FC<IProps> = ({ rowIdx, columnIdx, type, value, callback }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    callback(rowIdx, columnIdx, type === 'number' ? Number(e.target.value) : e.target.value)
  }

  return (
    <div className={styles['input-area']}>
      <input 
        type={type} 
        value={value} 
        className={styles['input-column']}
        onChange={handleChange} 
        onFocus={(e) => e.target.select()} 
      />
    </div>
  )
}

export default InputColumn
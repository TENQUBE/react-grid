import React, { FC } from 'react'
import styles from '../../styles/column.scss'

interface IProps {
  values: string[]
}

const ArrayColumn: FC<IProps> = ({ values }) => {
  return (
    <div className={styles['array-area']}>
      {values.map((value, i) => {
        return (
          <span className={styles['array-box']} key={i}>{value}</span>
        )
      })}
    </div>
  )
}

export default ArrayColumn
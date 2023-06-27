import React, { FC } from 'react'
import styles from '../../styles/column.scss'

interface IProps {
  value: string
}

const StringColumn: FC<IProps> = ({ value }) => {
  return (
    <>
      <p className={styles['basic-text']}>{value as string}</p>
    </>
  )
}

export default StringColumn
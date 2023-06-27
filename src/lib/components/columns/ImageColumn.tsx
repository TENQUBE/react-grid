import React, { FC } from 'react'
import styles from '../../styles/column.scss'

interface IProps {
  value: string
}

const ImageColumn: FC<IProps> = ({ value }) => {
  return (
    <div className={styles['image-area']}>
        <img 
          src={value} 
          className={`${styles['image']} image`}
          alt={''} 
        />
    </div>
  )
}

export default ImageColumn
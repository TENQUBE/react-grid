import React, { FC } from 'react'
import styles from '../../styles/column.scss'
import { ILinkRows } from '../../../lib/interfaces'

interface IProps {
  value: ILinkRows
}

const LinkColumn: FC<IProps> = ({ value: { name, target, url } }) => {
  return (
    <div>
      <a 
        target={target} 
        href={url} 
        className={styles['link']}
      >
        { name }
      </a>
    </div>
  )
}

export default LinkColumn
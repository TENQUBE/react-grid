import React, { FC, ReactNode } from 'react'

interface IProps {
  rowIdx: number
  columnIdx: number
  comp: FC<{ rowIdx: number, columnIdx: number }> | ReactNode
}

const ItemsColumn: FC<IProps> = ({ rowIdx, columnIdx, comp: Comp }) => {
  return (
    <>
      {typeof Comp === 'function' ? (
        <Comp rowIdx={rowIdx} columnIdx={columnIdx} />
      ) : 
        Comp
      }
    </>
  )
}

export default ItemsColumn
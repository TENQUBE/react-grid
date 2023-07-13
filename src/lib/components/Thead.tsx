import React, { DragEvent, FC, useEffect, useRef, useState } from 'react'
import styles from '../styles/thead.scss'

import { IColumn, IOptions, GridType, OrderType, RowType, GridTypeStr, IStorageOption } from '../interfaces'

import { getResizeColumnClassName } from '../constants'

import { columnStyles, fixedLeftResize } from '../utils/styles'
import { isNotFalse } from '../utils/types'
import { getStorageNameByWidths } from '../constants'

interface IProps {
  tableId: string
  tableEl: HTMLDivElement
  row: RowType[][]
  columns: IColumn[]
  options: IOptions
  sortBy: string
  orderBy: OrderType
  widthList: Array<number | null>
  setWidthList: (newWidthList: Array<number | null>) => void
  isOuter?: boolean
}

const Thead: FC<IProps> = ({ tableId, tableEl, row, columns, options, sortBy, orderBy, widthList, setWidthList, isOuter=false }) => {
  const { fixedSize, scalable: { enable, storage }, scroll: { enable: vsEnable, type: vsType, height: vsHeight } } = options
  const isStorage = storage.enable ? storage.target : false
  const isFixedHead = vsEnable && vsType === 'inner' && vsHeight > 0 

  const theadTrEl = useRef<HTMLTableRowElement>(null)

  const resizeRef = useRef({
    position: 0,
    size: 0
  })

  const [tableHeight, setTableHeight] = useState<number>()

  const handleDragStart = (e: DragEvent, idx: number) => {
    const columns = document.getElementsByClassName(getResizeColumnClassName(tableId, idx))
    resizeRef.current = {
      position: e.clientX,
      size: (columns[0] as HTMLElement).offsetWidth
    }
  }

  const handleDrag = (e: DragEvent, idx: number) => {
    const columns = document.getElementsByClassName(getResizeColumnClassName(tableId, idx))
    const moveSize = (e.clientX - resizeRef.current.position)
    const endSize = resizeRef.current.size + moveSize
    const minWidth = parseInt(getComputedStyle(columns[0])?.minWidth, 10)
    const setSize = (endSize < 0 || endSize > minWidth) ? endSize : minWidth

    fixedLeftResize(fixedSize, tableId, setSize, idx)

    for (const column of columns) {
      ;(column as HTMLElement).style.width = `${setSize}px`
    }
  }

  const handleDragEnd = () => {
    const columnEls = theadTrEl.current.children
    let loopIdx = 0
    const widthList = columns.map(({ type }) => {
      if(type === GridType.Hidden) return null

      const width = parseInt((columnEls[loopIdx] as HTMLElement).style.width)
      loopIdx += 1
      return width
    })

    if(isStorage) {
      const target = storage.target === 'local' ? window.localStorage : window.sessionStorage
      target.setItem(getStorageNameByWidths(tableId), JSON.stringify(widthList))
    }

    setWidthList(widthList)
    setTableHeight(tableEl.clientHeight)
  }

  const generateClassName = (className: string, columnIdx: number, columnIdxByNotHidden: number, type: GridType) => {
    const classList = [styles['table-head'], getResizeColumnClassName(tableId, columnIdx), `${GridTypeStr[type]}-type`, 'table-head']
    if (fixedSize >= columnIdxByNotHidden + 1) classList.push(styles['fixed'], 'fixed')
    if (className) classList.push(className)
    if (isFixedHead) classList.push(styles['fiexd-head'], 'fiexd-head')
    return classList.join(' ')
  }

  const hiddenIndices = columns.map((column, i: number) => column.type === GridType.Hidden ? i : false).filter(isNotFalse)
  let loopIdx = 0

  useEffect(() => {
    if (tableEl) setTableHeight(tableEl.clientHeight)
  }, [tableEl])

  return (
    <thead>
      <tr ref={theadTrEl}>
        {columns.map((column, i) => {
          const { id, type, name, isSorting, sortingAction, className, callback } = column
          if(type === GridType.Hidden) return null

          const width = widthList[i]

          const thIdx = loopIdx
                loopIdx += 1

          const isSortBy = id === sortBy
          const isAllCheck = () => type === GridType.Checkbox && (row.length !== 0 && row.every(v => v[i]))
          const hiddenLen = hiddenIndices.filter((idx) => idx <= i).filter(isNotFalse).length
          const columnIdxByNotHidden = i - hiddenLen

          const zIndex = fixedSize >= i ? 101 + columns.length - i : columns.length - i + 1
          
          return (
            <th 
              key={id} 
              className={generateClassName(className, thIdx, columnIdxByNotHidden, type)} 
              style={{
                ...columnStyles(widthList, fixedSize, columnIdxByNotHidden, width),
                zIndex: isOuter ? zIndex + 10 : zIndex,
                cursor: isSorting ? 'pointer' : 'default'
              }}
              onClick={isSorting ? sortingAction : null}
            >
              <div className={isSorting ? `${styles['sorting-table-head']} ${styles['table-head-div']}` : styles['table-head-div']}>
                {type === GridType.Checkbox ? (
                  <div 
                    className={isAllCheck() ? `${styles['checkbox']} ${styles['active']} checkbox active` : `${styles['checkbox']} checkbox`}
                    onClick={() => callback ? callback(true) : null}
                  />
                ) : (
                  <>
                    <span>{name}</span>
                    {isSorting && (
                      <div className={`${styles['sorting-box']} sorting-box`}>
                        <i 
                          className={(isSortBy && orderBy === OrderType.ASC) ? `${styles['sorting-up']} ${styles['active']} sorting-up active` : `${styles['sorting-up']} sorting-up`}
                        />
                        <i 
                          className={(isSortBy && orderBy === OrderType.DESC) ? `${styles['sorting-down']} ${styles['active']} sorting-down active` : `${styles['sorting-down']} sorting-down`}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
              {enable && (
                <i 
                  className={styles['resizer']} 
                  draggable={true} 
                  onDragStart={(e) => handleDragStart(e, thIdx)} 
                  onDrag={(e) => handleDrag(e, thIdx)}
                  onDragEnd={handleDragEnd}
                  style={{
                    height: `${tableHeight}px`,
                    zIndex
                  }}
                />
              )}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default Thead
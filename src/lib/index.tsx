import { FC, useEffect, useRef, useState } from 'react'

import styles from './styles/main.scss'

import { IPropsColumn, GridType, IPropsOptions, EditType, RowType, OrderType, IInitialValues, ILinkRows, IClassNameByRow, IPropsScalableOption, IPropsStorageOption } from './interfaces'

import Thead from './components/Thead'
import Tbody from './components/Tbody'
import { getColumnPrintWidth, getColumnWidth, getColumns, getOptions } from './utils/data'
import { gridDataValidation } from './utils/validation'

interface IProps {
  id: string
	rows: RowType[][]
  columns: IPropsColumn[]
	options?: IPropsOptions
  addClassNameByRows?: IClassNameByRow[]
}

const ReactGrid: FC<IProps> = ({ 
  id,
  rows,
  columns: receivedColumns, 
  options: receivedOptions,
  addClassNameByRows
}) => {
  const gridEl = useRef<HTMLDivElement>(null)

  const [updateCnt, setUpdateCnt] = useState(0)
  const [sortBy, setSortBy] = useState(null)
  const [orderBy, setOrderBy] = useState(OrderType.Default)
  const [widthList, setWidthList] = useState([])
  
  const options = getOptions(receivedOptions ? receivedOptions : {})
  const columns = getColumns(receivedColumns, { sortBy, setSortBy, orderBy, setOrderBy })
  const isError = !gridDataValidation(columns, rows)
  
  const isOuterScroll = options.scroll.enable && options.scroll.type === 'outer'

  useEffect(() => {
    const newColumnWidth = getColumnWidth(id, gridEl.current, columns, options.scalable)
    if(widthList.length !== newColumnWidth.length 
      || widthList.some((value, i) => value !== newColumnWidth[i])) {
        setWidthList(newColumnWidth)
        setUpdateCnt(updateCnt + 1)
    }
  }, [rows, receivedColumns])

  useEffect(() => {
    if(updateCnt === 0 || options.scalable.enable === false) return
    const printWidthList = getColumnPrintWidth(id, gridEl.current, widthList, options.scalable)
    const changeCheck = widthList.some((value, i) => value !== printWidthList[i])
    if(changeCheck) setWidthList(printWidthList)
  }, [updateCnt])

  const generateClassName = () => {
    const classList = [styles['table-area']]
    if (options.fixedSize > 0) classList.push('fixed-mode')
    if (isOuterScroll) classList.push(styles['table-area-outer-mode'])
    return classList.join(' ')
  }

  return (
    <div ref={gridEl} className={generateClassName()}>
      {
        isOuterScroll && (
          <div className={`scroll-area-outer ${styles['scroll-area-outer']}`}>
            <table className={`react-grid react-grid-outer ${styles['react-grid']} ${styles['react-grid-outer']}`}>
              <Thead 
                tableId={id} 
                tableEl={gridEl.current}
                row={rows} 
                columns={columns} 
                options={options}
                sortBy={sortBy}
                orderBy={orderBy}
                widthList={widthList}
                setWidthList={setWidthList}
                isOuter={true}
              />
            </table>
          </div>
        )
      }
      {isError ? (
        <div className={styles['error-area']}>
          <p>Data settings are incorrect</p>
        </div>
      ) : (
        <div 
          className={`${styles['scroll-area']} ${isOuterScroll ? styles['outer-mode'] : ''}`} 
          style={!isOuterScroll && options.scroll.height > 0 ? {
              height: `${options.scroll.height}px`,
              overflowY: 'auto'
          } : {}}
        >
          <table className={`react-grid ${styles['react-grid']}`}>
            {!isOuterScroll && (
              <Thead 
                tableId={id} 
                tableEl={gridEl.current}
                row={rows} 
                columns={columns} 
                options={options}
                sortBy={sortBy}
                orderBy={orderBy}
                widthList={widthList}
                setWidthList={setWidthList}
              />
            )}
            <Tbody 
              tableId={id} 
              rows={rows} 
              columns={columns}
              options={options} 
              addClassNameByRows={addClassNameByRows}
              widthList={widthList}
            />
          </table>
        </div>
      )}
    </div>
  )
}

export default ReactGrid
export { GridType, EditType, OrderType, RowType, ILinkRows, IPropsColumn, IPropsOptions, IInitialValues, IClassNameByRow, IPropsScalableOption, IPropsStorageOption }
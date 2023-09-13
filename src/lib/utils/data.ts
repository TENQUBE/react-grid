import { IOptions, IColumn, IPropsColumn, IPropsOptions, OrderType, IClassNameByRow, IScalableOption, GridType } from '../interfaces'
import ColumnPropsGenerator from '../data/ColumnPropsGenerator'
import Options from '../data/props/Options'
import ClassNameByRow from '../data/props/ClassNameByRow'
import { getStorageNameByWidths } from '../constants'
import { cacheWidthValidation } from './validation'

export const getColumnPrintWidth = (id: string, gridEl: HTMLDivElement, widthList: Array<null | number>, scalable: IScalableOption) => {
  let loopIdx = 0
  
  const tableEl = gridEl.getElementsByClassName('react-grid')[0]
  const newWidthList = widthList.map((width) => {
    if(width === null) return null
    const target = tableEl.firstElementChild.firstElementChild.children[loopIdx] as HTMLTableElement
    const minWidth = parseInt(window.getComputedStyle(target,null).getPropertyValue("min-width"), 0)
    loopIdx += 1
    
    return target.clientWidth > minWidth ? target.clientWidth : minWidth 
  })

  if(scalable.enable && scalable.storage.enable) {
    const target = scalable.storage.target === 'local' ? window.localStorage : window.sessionStorage
    target.setItem(getStorageNameByWidths(id), JSON.stringify(newWidthList))
  }

  return newWidthList
}

export const getColumnWidth = (id: string, gridEl: HTMLDivElement, columns: IColumn[], scalable: IScalableOption) => {
  const tableScrollAreaWidth = gridEl.firstElementChild.clientWidth
  const specific = columns.reduce((pur, cur) => typeof cur.width === 'undefined' ? pur : pur + cur.width, 0)
  const unspecifiedSize = columns.filter((column) => (typeof column.width === 'undefined' && column.type !== GridType.Hidden)).length
  const baseWidth = tableScrollAreaWidth-specific < 50 ? 100 : (tableScrollAreaWidth-specific)/unspecifiedSize

  const widthList = columns.map((column) => {
    if(column.type === GridType.Hidden) return null
    return typeof column?.width !== 'undefined' ? column.width : baseWidth
  })

  if(!scalable.enable || !scalable.storage.enable) return widthList
  
  const target = scalable.storage.target === 'local' ? window.localStorage : window.sessionStorage
  const cacheByWidth = target.getItem(getStorageNameByWidths(id))
  const vaidatedCacheWidth = cacheWidthValidation(cacheByWidth, columns)

  return vaidatedCacheWidth ? vaidatedCacheWidth : widthList
}

export const getColumns = (propsColumns: IPropsColumn[], {
  sortBy, 
  setSortBy, 
  orderBy, 
  setOrderBy
 }) => {
  const columns = ColumnPropsGenerator.getColumns(propsColumns)

  return columns.map((column: IColumn) => {
    const { id, isSorting, callback } = column
    
    if(isSorting) {
      column.sortingAction = () => {
        let sortOrderBy = OrderType.Default
        if(sortBy !== id) {
          setSortBy(id)
          sortOrderBy = OrderType.ASC
        } else {
          if(orderBy === OrderType.Default) {
            sortOrderBy = OrderType.ASC
          } else if(orderBy === OrderType.ASC) {
            sortOrderBy = OrderType.DESC
          } else {
            sortOrderBy = OrderType.Default
          }
        }
        setOrderBy(sortOrderBy)
        if(callback) callback(id, sortOrderBy)
      }
    }

    return column
  })
}

export const getOptions = (options: IPropsOptions): IOptions => {
  try {
    return new Options(options)
  } catch(e) {
    console.error(e)
    return {
      scalable: {
        enable: false,
        storage: {
          enable: false,
          target: 'session'
        }
      },
      fixedSize: 0,
      scroll: {
        enable: false
      }
    }
  }
}

export const getRowClassNames = (classNames: IClassNameByRow[]) => {
  try {
    return classNames.map((className) => {
      return new ClassNameByRow(className)
    })
  } catch(e) {
    console.error(e)
    return []
  }
}
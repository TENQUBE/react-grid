import { getResizeColumnClassName } from "../constants"

const fixedColumnLeftSize = (widthList: Array<number | null>, columnIdxByNotHidden: number): number => {
  const columnByNotHidden = widthList.filter((width => typeof width === 'number'))
  const fixedColumns = columnByNotHidden.slice(0, columnIdxByNotHidden)
  return fixedColumns.reduce((pre, cur) => cur + pre, 0)
}

export const columnStyles = (widthList: Array<number | null>, fixedSize: number, columnIdxByNotHidden: number, width: number) => {
  return fixedSize > columnIdxByNotHidden
    ? { 
      left: fixedColumnLeftSize(widthList, columnIdxByNotHidden),
      width
    } : { 
      width 
    }
}

export const fixedLeftResize = (fixedSize:number, tableId: string, setSize: number, idx: number) => {
  for(let i=idx; i<fixedSize-1; i++) {
    const { width, left } = (document.getElementsByClassName(getResizeColumnClassName(tableId, i))[0] as HTMLElement).style
    const columns = document.getElementsByClassName(getResizeColumnClassName(tableId, i+1))
    for (const column of columns) {
      const leftNo = parseInt(width, 10) + parseInt(left, 10)
      if(leftNo > 0) {
        ;(column as HTMLElement).style.left = `${leftNo}px`
      }
    }
  }

}
import { GridType, IColumn, ILinkRows, RowType } from '../interfaces'

export const cacheWidthValidation = (cacheData: string, columnLength: number) => {
  if(!cacheData) return false

  try {
    const cacheWidth = JSON.parse(cacheData)
    if(!Array.isArray(cacheWidth)) return false
    if(cacheWidth.some((width) => typeof width !== 'number' && width !== null)) return false
    if(cacheWidth.length !== columnLength) return false
    
    return cacheWidth
  } catch {
    return false
  }
}

export const gridDataValidation = (
  columns: IColumn[], 
  data: RowType[][]
) => {
  return data.every((datum) => datum.length === columns.length)
}

export const isDataTypeIncorrect = (type: GridType, datum: RowType, items: Array<React.ReactNode | React.FC>) => {
  switch(type) {
    case GridType.Array:
      if(!Array.isArray(datum)) return true
      if((datum as Array<string | number>).some((d: string | number) => typeof d !== 'string' && typeof d !== 'number')) return true
      break
    case GridType.Button:
      if(typeof datum !== 'string') return true
      break
    case GridType.Checkbox:
      if(typeof datum !== 'boolean') return true
      break
    case GridType.Image:
      if(typeof datum !== 'string') return true
      break
    case GridType.InputText:
      if(typeof datum !== 'string') return true
      break
    case GridType.InputNumber:
      if(typeof datum !== 'number') return true
      break
    case GridType.Items:
      if(typeof datum !== 'number') return true
      if(typeof items[datum] !== 'function' && typeof items[datum] !== 'object') return true
      break
    case GridType.Link:
      const { name, target, url } = datum as ILinkRows
      if(typeof name !== 'string' || typeof target !== 'string' || typeof url !== 'string') return true
      break
    case GridType.String:
      if(typeof datum !== 'string') return true
      break
    case GridType.Toggle:
      if(typeof datum !== 'boolean') return true
      break
    case GridType.Component:
      if(typeof datum !== 'function' && typeof datum !== 'object') return true
      break
  }

  return false
}
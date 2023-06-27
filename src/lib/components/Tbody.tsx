import React, { FC, ReactNode } from 'react'
import styles from '../styles/tbody.scss'

import { IColumn, IOptions, ILinkRows, GridType, RowType, GridTypeStr, IClassNameByRow } from '../interfaces'

import { getResizeColumnClassName } from '../constants'
import { columnStyles } from '../utils/styles'
import { isDataTypeIncorrect } from '../utils/validation'
import { isNotFalse } from '../utils/types'

import StringColumn from './columns/StringColumn'
import CheckColumn from './columns/CheckColumn'
import ToggleColumn from './columns/ToggleColumn'
import ImageColumn from './columns/ImageColumn'
import LinkColumn from './columns/LinkColumn'
import ButtonColumn from './columns/ButtonColumn'
import ItemsColumn from './columns/ItemsColumn'
import InputColumn from './columns/InputColumn'
import ArrayColumn from './columns/ArrayColumn'
import CompColumn from './columns/CompColumn'

interface IProps {
  tableId: string
  columns: IColumn[]
  rows: RowType[][]
  options: IOptions
  addClassNameByRows?: IClassNameByRow[]
  widthList: Array<number | null>
}

const Tbody: FC<IProps> = ({ tableId, columns, rows, options, addClassNameByRows = [], widthList }) => {
  const { fixedSize } = options

  const generateClassName = (className: string, rowIdx: number, columnIdx: number, columnIdxByNotHidden:number, type: GridType) => {
    const rowClassNames = addClassNameByRows.filter(({ index }) => index === rowIdx).map(({ className }) => className)
    const classList = [styles['table-body'], getResizeColumnClassName(tableId, columnIdx), `${GridTypeStr[type]}-type`, `row-${rowIdx}`]
    if (fixedSize >= columnIdxByNotHidden + 1) classList.push(styles['fixed'], 'fixed')
    if (className) classList.push(className, `${className}-${rowIdx}`)
    if (rowClassNames.length > 0) classList.push(...rowClassNames)
    return classList.join(' ')
  }

  const hiddenIndices: number[] = columns.map((column, i: number) => column.type === GridType.Hidden ? i : false).filter(isNotFalse)

  return (
    <tbody>
      {rows.map((row, i) => {
        if(!row || row.length === 0) return null
        let loopIdx = 0
        
        return (
          <tr key={i}>
            {row.map((datum, j) => {
              const { type, className, items, callback } = columns[j]
              if(type === GridType.Hidden) return null

              const width = widthList[j]

              const tbIdx = loopIdx
                    loopIdx += 1

              const hiddenLen = hiddenIndices.filter((idx) => idx <= j).filter(isNotFalse).length
              const columnIdxByNotHidden = j - hiddenLen

              const zIndex = fixedSize > j ? 100 + columns.length - j : columns.length - j

              return (
                <td 
                  key={j}
                  className={generateClassName(className, i, tbIdx, columnIdxByNotHidden, type)}
                  style={{
                    ...columnStyles(widthList, fixedSize, columnIdxByNotHidden, width),
                    zIndex
                  }}
                >
                  { isDataTypeIncorrect(type, datum, items) ?
                    <p className={styles['type-error-message']}>Data type is incorrect</p>
                  : (
                    <>
                      {type === GridType.String && (
                        <StringColumn value={datum as string} />
                      )}
                      {type === GridType.Checkbox && (
                        <CheckColumn rowIdx={i} columnIdx={j} value={datum as boolean} callback={callback} />
                      )}
                      {type === GridType.Toggle && (
                        <ToggleColumn rowIdx={i} columnIdx={j} isActive={datum as boolean} callback={callback} />
                      )}
                      {type === GridType.Image && (
                        <ImageColumn value={datum as string} />
                      )}
                      {type === GridType.Link && (
                        <LinkColumn value={datum as ILinkRows} />
                      )}
                      {type === GridType.Button && (
                        <ButtonColumn rowIdx={i} columnIdx={j} value={datum as string} callback={callback} />
                      )}
                      {type === GridType.Items && (
                        <ItemsColumn rowIdx={i} columnIdx={j} comp={items[datum as number] as FC | ReactNode } />
                      )}
                      {type === GridType.InputText && (
                        <InputColumn type={'text'} rowIdx={i} columnIdx={j} value={datum as string} callback={callback} />
                      )}
                      {type === GridType.InputNumber && (
                        <InputColumn type={'number'} rowIdx={i} columnIdx={j} value={datum as number} callback={callback} />
                      )}
                      {type === GridType.Array && (
                        <ArrayColumn values={datum as string[]} />
                      )}
                      {type === GridType.Component && (
                        <CompColumn rowIdx={i} columnIdx={j} comp={datum as FC | ReactNode } />
                      )}
                      {/* {type === GridType.Date && (
                        <DateEditBox value={datum as string} />
                      )}
                      {type === GridType.Time && (
                        <TimeEditBox value={datum as string} />
                      )} */}
                    </>
                  )}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default Tbody
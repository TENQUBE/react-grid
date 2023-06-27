import React, { FC, useRef, useState } from 'react'

import ReactGrid, { GridType } from '../../dist/cjs'
import { RowType, OrderType, IPropsColumn, IPropsOptions } from '../lib/interfaces'

const ItemComp = ({ test }) => {
  return (<p>{ test }</p>)
}

const Grid: FC = () => {

  const defaultRows = [['aaa'], ['bbb'], ['ccc']]
  const ascRows = [['aaa'], ['bbb'], ['ccc']]
  const descRows = [['ccc'], ['bbb'], ['aaa']]

  const [rows, setRows] = useState<Array<Array<RowType>>>(defaultRows)

  const handleSorting = (columnId: string, orderType: OrderType) => {
    setRows(orderType === OrderType.ASC ? ascRows : descRows)
  }

  const columns: IPropsColumn[] = [{
    id: 'string',
    name: 'Text',
    type: GridType.String,
    isSorting: true,
    callback: handleSorting
  }]

  // const [rows, setRows] = useState<RowType[][]>([[
  //   false, ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff'], '11', 'aa', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 0, 10, 'a'
  //   , (rowIdx: number, columnIdx: number) => {
  //     return <ItemComp test={'a'} />
  //   }
  // ], [
  //   true, ['aaaa', 'bbbb', 'cccc'], '22', 'bb', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 1, 15, 'b', <ItemComp test={'a'} />
  // ], [
  //   false, ['aaaa', 'bbbb', 'cccc'], '33', 'cc', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 0, 20, 'c', <ItemComp test={'a'} />
  // ], [
  //   false, ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff'], '11', 'aa', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 0, 10, 'a', <ItemComp test={'a'} />
  // ], [
  //   true, ['aaaa', 'bbbb', 'cccc'], '22', 'bb', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 1, 15, 'b', <ItemComp test={'a'} />
  // ], [
  //   false, ['aaaa', 'bbbb', 'cccc'], '33', 'cc', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 0, 20, 'c', <ItemComp test={'a'} />
  // ], [
  //   false, ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff'], '11', 'aa', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 0, 10, 'a', <ItemComp test={'a'} />
  // ], [
  //   true, ['aaaa', 'bbbb', 'cccc'], '22', 'bb', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 1, 15, 'b', <ItemComp test={'a'} />
  // ], [
  //   false, ['aaaa', 'bbbb', 'cccc'], '33', 'cc', 'string2', 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60', false, 'button', 0, 20, 'c', <ItemComp test={'a'} />
  // ]])

  // const handleChangeToggle = (rowIdx: number, columnIdx: number) => {
  //   const cloneRows = rows.map(row => [...row])
  //   cloneRows[rowIdx][columnIdx] = !cloneRows[rowIdx][columnIdx]
  //   setRows(cloneRows)
  // }

  // const handleChangeInput = (rowIdx: number, columnIdx: number, value: string | number) => {
  //   const cloneRows = rows.map(row => [...row])
  //   cloneRows[rowIdx][columnIdx] = value
  //   setRows(cloneRows)
  // }

  // // const columns = [{
  // //   id: 'chrome',
  // //   name: 'Chrome',
  // //   type: GridType.String,
  // //   // width: 50
  // // }, {
  // //   id: 'ie',
  // //   name: 'IE',
  // //   type: GridType.String,
  // //   // width: 200
  // // }, {
  // //   id: 'edge',
  // //   name: 'EdgeEdgeEdgeEdgeEdge',
  // //   type: GridType.String,
  // //   // width: 200
  // // }, {
  // //   id: 'safari',
  // //   name: 'Safari',
  // //   type: GridType.String,
  // //   // width: 100
  // // }, {
  // //   id: 'firefox',
  // //   name: 'Firefox',
  // //   type: GridType.String,
  // //   // width: 100
  // // }]
  
  // const columns: IPropsColumn[] = [{
  //   id: '1',
  //   width: 50,
  //   type: GridType.Checkbox,
  //   callback: (isAll: boolean, rowIdx?: number, columnIdx?: number) => {
  //     console.log(isAll, rowIdx, columnIdx)
  //   }
  // }, {
  //   id: '11',
  //   name: 'array',
  //   type: GridType.Array
  // }, {
  //   id: '2',
  //   name: 'string1',
  //   type: GridType.String,
  //   className: 'test-class-name',
  // }, {
  //   id: '22',
  //   type: GridType.Hidden
  // }, {
  //   id: '3',
  //   name: 'string2',
  //   type: GridType.String,
  //   isSorting: true,
  //   callback: (columnId: string, orderType: OrderType) => {
  //     console.log(columnId, orderType)
  //   }
  // }, {
  //   id: '4',
  //   name: 'image',
  //   type: GridType.Image
  // }, {
  //   id: '5',
  //   name: 'toggle',
  //   type: GridType.Toggle,
  //   callback: (rowIdx: number, columnIdx: number) => {
  //     handleChangeToggle(rowIdx, columnIdx)
  //   }
  // }, {
  //   id: '7',
  //   name: 'button',
  //   width: 120,
  //   type: GridType.Button,
  //   className: 'ttest',
  //   callback: (rowIdx: number, columnIdx: number) => {
  //     console.log(rowIdx, columnIdx)
  //   }
  // }, {
  //   id: '8',
  //   name: 'items',
  //   width: 120,
  //   type: GridType.Items,
  //   items: [
  //     ({ rowIdx, columnIdx }) => {
  //       const test = rowIdx + columnIdx + 'a'
  //       return (<ItemComp test={test} />)
  //     }, 
  //     <ItemComp test={'test'} />
  //   ]
  // }, {
  //   id: '9',
  //   name: 'input number',
  //   type: GridType.InputNumber,
  //   callback: (rowIdx: number, columnIdx: number, value: string | number) => {
  //     console.log(value)
  //     handleChangeInput(rowIdx, columnIdx, value)
  //   }
  // }, {
  //   id: '10',
  //   name: 'input text',
  //   type: GridType.InputText,
  //   callback: (rowIdx: number, columnIdx: number, value: string | number) => {
  //     console.log(value)
  //     handleChangeInput(rowIdx, columnIdx, value)
  //   }
  // }, {
  //   id: '13',
  //   name: 'component',
  //   width: 120,
  //   type: GridType.Component,
  //   isSorting: true,
  //   callback: (columnId: string, orderType: OrderType) => {
  //     console.log(columnId, orderType)
  //   }
  // }]

  const options: IPropsOptions = {
    fixedSize: 3,
    scalable: true,
    // verticalScroll: {
    //   enable: true,
    //   type: 'inner'
    //   // height: 400,
    // }
  }

  const orderBy = useRef(OrderType.DESC)
  const sortBy = useRef('2')

  const initialValues = {
    sorting: {
      sortBy: sortBy.current,
      orderBy: orderBy.current
    }
  }
  
  const addClassNameByRows = [{
    index: 0,
    className: 'aaa'
  }, {
    index: 7,
    className: 'bbb'
  }]

  return (
    <div style={{
      // padding: '20px',
      marginTop: '50px',
      height: '600px',
      overflow: 'auto',
      width: '800px'
    }}>
      <div style={{
        // maxWidth: '800px',
        // margin: '0 auto',
        height: '2000px'
      }}>
        <ReactGrid id="a" columns={columns} rows={rows} options={options} addClassNameByRows={addClassNameByRows} />
      </div>
    </div>
  )
}

export default Grid
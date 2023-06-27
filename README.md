# @tenqube/react-grid
  
![logo](https://images.tenqube.com/labs/react-grid.png)
  

## Introduction
React Grid is a tabular View library used within the Tenqube company.  
It is composed of React components and can be implemented easily and intuitively by passing the data constituting the table as Props.
  
> It is still an early version, so there may be unstable parts. Please register the problematic part as an issue on GitHub.
  
## Version
v1.0.4

## Features 
### Change and remember column width. 
You can change the size of each column in the table by enabling the `scalable` setting in `options`, and the changes will be saved and persisted in web storage.  
  
### Fixed column not working to scroll. 
If you enter a size in the `fixedSize` setting in `options`, the column is fixed by that size. (default `0`)  
  
### Other basic features..  
* Provided as a sorting status callback by column.  
* Specifying per-row classes for styling.  
* Provides column types such as checkbox and toggle.  
  
## Installation
```sh
$ npm install @tenqube/react-grid
```

## Quick Start
React Grid makes it simple to construct a table view by passing the promised `columns` and `rows` as Props.  
and below is a simple configuration example.  
  
```tsx
// GridComponent.tsx
import React from 'react'
import Grid, { GridType, IPropsColumn, RowType } from '@tenqube/react-grid'

const GridComponent = () => {

  const columns: Array<IPropsColumn> = [{
    id: 'week',
    name: 'THIS WEEK',
    type: GridType.String
  }, {
    id: 'title',
    name: 'TITLE',
    type: GridType.String
  }, {
    id: 'artist',
    name: 'ARTIST',
    type: GridType.String,
  }, {
    id: 'award',
    name: 'AWARD',
    type: GridType.String
  }]

  const rows: Array<Array<RowType>> = [[
    '1', 'Last Night', 'Morgan Wallen', '★'
  ], [
    '2', 'Flowers', 'Miley Cyrus', ''
  ], [
    '3', 'Kill Bill', 'SZA', ''
  ], [
    '4', 'Calm Down', 'Rema & Selena Gomez', '★'
  ], [
    '5', 'Favorite Song', 'Toosii', '★'
  ]]

  return (
    <Grid id={'billboard'} columns={columns} rows={rows} />
  )

}

export default GridComponent
```
  
## Props
React Grid provides props of `id`, `columns`, `rows`, `options` and `addClassNameByRows`.  
  
### Grid Props
```ts
interface IProps {
  id: string
  rows: RowType[][]
  columns: IPropsColumn[]
  options?: IPropsOptions
  addClassNameByRows?: IClassNameByRow[]
}
```

### Row Type
```ts
type string | number | boolean | ILinkRows | Array<string | number> | null | Function | ReactNode
```

### Link Rows
```ts
interface ILinkRows {
  name: string
  target: string
  url: string
}
```

### Link Rows
```ts
interface IClassNameByRow {
  index: number
  className: string
}
```

### GridType
```ts
enum GridType {
  Hidden,
  Checkbox,
  String,
  Toggle,
  Image,
  Link,
  Button,
  Items,
  InputText,
  InputNumber,
  Array,
  Component
}
```

### Columns
* Hidden type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Hidden
}
```

* Checkbox type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Checkbox
  callback: (isAll: boolean, rowIdx?: number, columnIdx?: number) => void
  width?: number
  className?: string
}
```

* Toggle type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Toggle
  callback: (rowIdx: number, columnIdx: number) => void
  width?: number
  name?: string
  className?: string
}
```

* String type
```ts
interface IPropsColumn {
  id: string
  type: GridType.String
  width?: number
  name?: string
  className?: string
  isSorting?: boolean
  callback?: (columnId: string, orderType: OrderType) => void // callback by sorting 
}
```

* Image type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Image
  width?: number
  name?: string
  className?: string
}
```

* Link type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Link
  width?: number
  name?: string
  className?: string
  isSorting?: boolean
  callback?: (columnId: string, orderType: OrderType) => void // callback by sorting
}
```

* Button type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Button
  callback: (rowIdx: number, columnIdx: number) =>  void
  width?: number
  name?: string
  className?: string
}
```

* Items type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Items
  items: Array<FC<{ rowIdx: number; columnIdx: number }> | ReactNode>
  width?: number
  name?: string
  className?: string,
}
```

* Input type
```ts
interface IPropsColumn {
  id: string
  type: GridType.InputText | GridType.InputNumber
  callback: (rowIdx: number, columnIdx: number, value: string | number) => void
  width?: number
  name?: string
  className?: string,
}
```

* Array type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Array
  width?: number
  name?: string
  className?: string,
}
```

* Component type
```ts
interface IPropsColumn {
  id: string
  type: GridType.Component
  width?: number
  name?: string
  className?: string
  isSorting?: boolean
  callback?: (columnId: string, orderType: OrderType) => void // callback by sorting 
}
```

### OrderType
```ts
enum OrderType {
  Default,
  ASC,
  DESC
}
```

### Options
```ts
interface IPropsOptions {
  scalable?: boolean | IPropsScalableOption
  fixedSize?: number
  verticalScroll?: IPropsVerticalScroll
}
```

```ts
interface IPropsScalableOption {
  enable: boolean
  storage?: boolean | IPropsStorageOption
}
```

```ts
interface IPropsStorageOption {
  enable: boolean
  target?: 'local' | 'session'
}
```

```ts
export interface IPropsVerticalScroll {
  enable: boolean,
  type?: 'inner' | 'outer'
  height?: number
}
```

## Example
### String type and Sorting
```tsx
import React, { useState } from 'react'
import Grid, { GridType, IPropsColumn, RowType } from '@tenqube/react-grid'

const StringTypeComponent = () => {

  const ascRows = [['aaa'], ['bbb'], ['ccc']]
  const descRows = [['ccc'], ['bbb'], ['aaa']]

  const [rows, setRows] = useState<Array<Array<RowType>>>(ascRows)

  const handleSorting = (columnId: string, orderType: OrderType) => {
    setRows(orderType === OrderType.ASC ? ascRows : descRows)
  }

  const columns: Array<IPropsColumn> = [{
    id: 'string',
    name: 'Text',
    type: GridType.String,
    isSorting: true,
    callback: handleSorting
  }]

  return (
    <Grid id={'string'} columns={columns} rows={rows} />
  )

}

export default StringTypeComponent
```

### Toggle type
```tsx
import React, { useState } from 'react'
import Grid, { GridType, IPropsColumn, RowType } from '@tenqube/react-grid'

const ToggleTypeComponent = () => {

  const [rows, setRows] = useState<Array<Array<RowType>>>([[true], [false]])

  const handleToggle = (rowIdx: number, columnIdx: number) => {
    const cloneRows = rows.map(row => [...row])
    cloneRows[rowIdx][columnIdx] = !cloneRows[rowIdx][columnIdx]
    setRows(cloneRows)
  }

  const columns: Array<IPropsColumn> = [{
    id: 'toggle',
    name: 'Toggle',
    type: GridType.Toggle,
    callback: handleToggle
  }]

  return (
    <Grid id={'toggle'} columns={columns} rows={rows} />
  )

}

export default ToggleTypeComponent
```

## License
MIT
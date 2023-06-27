import { FC, ReactNode } from "react"

export enum GridType {
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

export enum GridTypeStr {
  checkbox = 1,
  string,
  toggle,
  image,
  link,
  button,
  items,
  'input-text',
  'input-number',
  array
}

export enum EditType {
  Selective,
  Overall
}

export enum OrderType {
  Default,
  ASC,
  DESC
}

export interface IInitialValues {
  sorting?: {
    sortBy: string | null
    orderBy: OrderType
  }
}

export interface IClassNameByRow {
  index: number
  className: string
}

export interface IDefaultColumnProps {
  width?: number
  className?: string
}

export interface IPropsColumn {
	id: string
  type: GridType
  width?: number
	name?: string
  items?: Array<FC<{ rowIdx: number; columnIdx: number }> | ReactNode>
  callback?: Function
  className?: string
  isSorting?: boolean
}

export interface IColumn {
  id: string
  type: GridType
  width?: number
	name?: string
  callback?: Function
  className?: string
  items?: Array<FC<{ rowIdx: number; columnIdx: number }> | ReactNode>
  isSorting?: boolean
  sortingAction?: () => any
}

export interface ILinkRows {
  name: string
  target: string
  url: string
}

export type RowType = string | number | boolean | ILinkRows | Array<string | number> | null | Function | ReactNode

export interface IPropsOptions {
  scalable?: boolean | IPropsScalableOption
  fixedSize?: number
  scroll?: IPropsScroll
}

export interface IPropsScroll {
  enable: boolean,
  type?: 'inner' | 'outer'
  height?: number
}

export interface IOptions {
	scalable: IScalableOption
  fixedSize: number
  scroll: IScroll
}

export interface IScroll {
  enable: boolean,
  type?: 'inner' | 'outer'
  height?: number
}

export interface IScalableOption {
  enable: boolean
  storage: IStorageOption
}

export interface IPropsScalableOption {
  enable: boolean
  storage?: boolean | IPropsStorageOption
}

export interface IPropsStorageOption {
  enable: boolean
  target?: 'local' | 'session'
}

export interface IStorageOption {
  enable: boolean
  target?: 'local' | 'session'
}
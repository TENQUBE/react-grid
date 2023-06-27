import { FC, ReactNode } from 'react'
import { GridType } from '../../interfaces'

interface IParmas {
  id: string
  type: GridType.Items
  items: Array<FC | ReactNode>
  width?: number
  name?: string
  className?: string
}

class ItemsColumn {

  readonly id: string
  readonly type: GridType.Items
  readonly items: Array<FC | ReactNode>
  readonly width?: number
  readonly name: string
  readonly className: string

  constructor({ id, type, items, width, name = '', className = '' }: IParmas) {
    if(!id) throw Error('id value does not exist')
    if(type !== GridType.Items) throw Error('type value does not exist')
    if(typeof id !== 'string') throw Error('id is not of type string')
    if(typeof width !== 'undefined' && typeof width !== 'number') throw Error('width is not of type number')
    if(typeof name !== 'string') throw Error('name is not of type string')
    if(typeof className !== 'string') throw Error('className is not of type string')
    
    this.items = items
    this.id = id
    this.type = type
    if(typeof width !== 'undefined') this.width = width
    this.name = name
    this.className = className
  }

}

export default ItemsColumn
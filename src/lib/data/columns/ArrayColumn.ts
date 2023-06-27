import { GridType } from '../../interfaces'

interface IParmas {
  id: string
  type: GridType.Array
  width?: number
  name?: string
  className?: string
}

class ArrayColumn {

  readonly id: string
  readonly type: GridType.Array
  readonly width?: number
  readonly name: string
  readonly className: string

  constructor({ id, type, width, name = '', className = '' }: IParmas) {
    if(!id) throw Error('id value does not exist')
    if(type !== GridType.Array) throw Error('type value does not exist')
    if(typeof id !== 'string') throw Error('id is not of type string')
    if(typeof width !== 'undefined' && typeof width !== 'number') throw Error('width is not of type number')
    if(typeof name !== 'string') throw Error('name is not of type string')
    if(typeof className !== 'string') throw Error('className is not of type string')
    
    this.id = id
    this.type = type
    if(typeof width !== 'undefined') this.width = width
    this.name = name
    this.className = className
  }

}

export default ArrayColumn
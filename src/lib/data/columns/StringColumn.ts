import { GridType, OrderType } from '../../interfaces'

interface IParmas {
  id: string
  type: GridType.String
  width?: number
  name?: string
  className?: string
  isSorting?: boolean
  callback?: Function
}

class StringColumn {

  readonly id: string
  readonly type: GridType.String
  readonly width?: number
  readonly name: string
  readonly className: string
  readonly isSorting: boolean
  readonly callback: Function

  constructor({ id, type, width, name = '', className = '', isSorting = false, callback = () => {} }: IParmas) {
    if(!id) throw Error('id value does not exist')
    if(type !== GridType.String) throw Error('type value does not exist')
    if(!callback) throw Error('callback value does not exist')
    if(typeof id !== 'string') throw Error('id is not of type string')
    if(typeof width !== 'undefined' && typeof width !== 'number') throw Error('width is not of type number')
    if(typeof name !== 'string') throw Error('name is not of type string')
    if(typeof callback !== 'function') throw Error('callback is not of type function')
    if(typeof className !== 'string') throw Error('className is not of type string')
    if(typeof isSorting !== 'boolean') throw Error('isSorting is not of type boolean')
    
    this.id = id
    this.type = type
    if(typeof width !== 'undefined') this.width = width
    this.name = name
    this.className = className
    this.isSorting = isSorting
    this.callback = callback
  }

}

export default StringColumn
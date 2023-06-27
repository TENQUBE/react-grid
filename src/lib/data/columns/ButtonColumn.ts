import { GridType } from '../../interfaces'

interface IParmas {
  id: string
  type: GridType.Button
  callback: Function
  width?: number
  name?: string
  className?: string
}

class ButtonColumn {

  readonly id: string
  readonly type: GridType.Button
  readonly callback: Function
  readonly width?: number
  readonly name: string
  readonly className: string

  constructor({ id, type, callback, width, name = '', className = '' }: IParmas) {
    if(!id) throw Error('id value does not exist')
    if(type !== GridType.Button) throw Error('type value does not exist')
    if(!callback) throw Error('callback value does not exist')
    if(typeof id !== 'string') throw Error('id is not of type string')
    if(typeof width !== 'undefined' && typeof width !== 'number') throw Error('width is not of type number')
    if(typeof name !== 'string') throw Error('name is not of type string')
    if(typeof callback !== 'function') throw Error('callback is not of type function')
    if(typeof className !== 'string') throw Error('className is not of type string')
    
    this.id = id
    this.type = type
    if(typeof width !== 'undefined') this.width = width
    this.name = name
    this.className = className
    this.callback = callback
  }

}

export default ButtonColumn
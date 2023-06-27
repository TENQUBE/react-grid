import { GridType } from '../../interfaces'

interface IParmas {
  id: string
  type: GridType.Checkbox
  callback: Function
  width?: number
  className?: string
}

class CheckColumn {

  readonly id: string
  readonly type: GridType.Checkbox
  readonly callback: Function
  readonly width: number
  readonly className: string

  constructor({ id, type, callback, width, className = '' }: IParmas) {
    if(!id) throw Error('id value does not exist')
    if(type !== GridType.Checkbox) throw Error('type value does not exist')
    if(!callback) throw Error('callback value does not exist')
    if(typeof id !== 'string') throw Error('id is not of type string')
    if(typeof width !== 'undefined' && typeof width !== 'number') throw Error('width is not of type number')
    if(typeof callback !== 'function') throw Error('callback is not of type function')
    if(typeof className !== 'string') throw Error('className is not of type string')
    
    this.id = id
    this.type = type
    if(typeof width !== 'undefined') this.width = width
    this.className = className
    this.callback = callback
  }

}

export default CheckColumn
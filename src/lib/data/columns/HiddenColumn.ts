import { GridType } from '../../interfaces'

interface IParmas {
  id: string
  type: GridType.Hidden
}

class HiddenColumn {

  readonly id: string
  readonly type: GridType.Hidden

  constructor({ id, type }: IParmas) {
    if(!id) throw Error('id value does not exist')
    if(type !== GridType.Hidden) throw Error('type value does not exist')
    if(typeof id !== 'string') throw Error('id is not of type string')
    
    this.id = id
    this.type = type
  }

}

export default HiddenColumn
class ClassNameByRow {
  
  readonly index: number
  readonly className: string

  constructor({ index, className }) {
    if(typeof index === 'undefined') throw Error('index value does not exist')
    if(typeof className === 'undefined') throw Error('className value does not exist')
    if(typeof index !== 'number') throw Error('index is not of type number')
    if(typeof className !== 'string') throw Error('className is not of type string')
    this.index = index
    this.className = className
  }

}

export default ClassNameByRow
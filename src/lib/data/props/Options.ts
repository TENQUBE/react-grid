import { IPropsOptions, IPropsScalableOption, IPropsScroll, IPropsStorageOption, IScroll } from "../../../lib/interfaces"

class ScalableStorage {
  readonly enable: boolean
  readonly target?: 'local' | 'session'

  constructor({ enable, target }: IPropsStorageOption) {
    if(typeof enable !== 'undefined' && typeof enable !== 'boolean') {
      throw Error('enable is not of type boolean')
    }
    if(typeof target !== 'undefined' && target !== 'local' && target !== 'session') {
      throw Error('Target has an incorrect value.')
    }
    this.enable = typeof enable === 'boolean' ? enable : false
    if(target) {
      this.target = target
    }
  }
}

class Scalable {
  readonly enable: boolean
  readonly storage: ScalableStorage

  constructor({ enable, storage }: IPropsScalableOption) {
    if(typeof enable !== 'undefined' && typeof enable !== 'boolean') {
      throw Error('enable is not of type boolean')
    }
    
    this.enable = typeof enable === 'boolean' ? enable : false
    const storageEnable = storage === true || (typeof storage === 'object' && storage?.enable === true)
    const storageProps: IPropsStorageOption = { 
      enable: storageEnable      
    }
    if(storageEnable) {
      storageProps.target = (typeof storage === 'object' && storage?.target === 'local') ? 'local' : 'session'
    }
    this.storage = new ScalableStorage(storageProps)
  }
}

class Scroll {
  readonly enable: boolean
  readonly type: 'inner' | 'outer'
  readonly height: number

  constructor({ enable, type, height }: IPropsScroll) {
    if(typeof enable !== 'undefined' && typeof enable !== 'boolean') {
      throw Error('enable is not of type boolean')
    }
    if(typeof type !== 'undefined' && type !== 'inner' && type !== 'outer') {
      throw Error('verticalScroll type error')
    }
    if(typeof height !== 'undefined' && typeof height !== 'number') {
      throw Error('height is not of type number')
    }
    this.enable = !!enable
    this.type = type ? type : 'inner'
    this.height = height ? height : 0
  }
}

class Options {
  
  readonly scalable: Scalable
  readonly fixedSize: number
  readonly scroll: IScroll

  constructor({ scalable, fixedSize, scroll }: IPropsOptions) {
    if(typeof fixedSize !== 'undefined' && typeof fixedSize !== 'number') {
      throw Error('fixedSize is not of type number')
    }
    const scalbleEnable = scalable === true || (typeof scalable === 'object' && scalable?.enable === true)
    const storageProps: IPropsStorageOption = !scalbleEnable 
        || (typeof scalable === 'object' && scalable.storage === false)
        || (typeof scalable === 'object' && typeof scalable?.storage === 'object' && scalable.storage?.enable !== true)
      ? { enable: false } 
      : (typeof scalable === 'object' && typeof scalable?.storage === 'object' && scalable.storage?.target === 'local')
        ? { enable: true, target: 'local' }
        : { enable: true, target: 'session' }

    this.scalable = new Scalable({ enable: scalbleEnable, storage: storageProps })
    this.fixedSize = typeof fixedSize === 'undefined' ? 0 : fixedSize
    this.scroll = new Scroll({
      enable: scroll?.enable,
      type: scroll?.type,
      height: scroll?.height
    })
  }

}

export default Options
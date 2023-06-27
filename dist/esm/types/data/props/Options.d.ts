import { IPropsOptions, IPropsScalableOption, IPropsStorageOption, IScroll } from "../../../lib/interfaces";
declare class ScalableStorage {
    readonly enable: boolean;
    readonly target?: 'local' | 'session';
    constructor({ enable, target }: IPropsStorageOption);
}
declare class Scalable {
    readonly enable: boolean;
    readonly storage: ScalableStorage;
    constructor({ enable, storage }: IPropsScalableOption);
}
declare class Options {
    readonly scalable: Scalable;
    readonly fixedSize: number;
    readonly scroll: IScroll;
    constructor({ scalable, fixedSize, scroll }: IPropsOptions);
}
export default Options;

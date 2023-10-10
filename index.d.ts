export function cloneDeep (obj: Object): Object
export function get(obj: Object, path: string | Array<string | number>, defaultValue: any)
export function getArrayHasIntersect (arr1: Array<any>, arr2: Array<any>): boolean
export function getArrayUniq (arr: Array<any>): Array<any>
export function isEmpty(val: any): boolean
export function isNil(val: any): boolean
export function isPlainObject(val: any): boolean
export function pick(obj: Object, keys: Array<string>): Object
export function pickBy(obj: Object, predicate: (val: any, key: string) => boolean): Object
export function camelize(str: string): string
export function omit(obj: Object, keys: Array<string>): Object
export function omitBy(obj: Object, predicate: (val: any, key: string) => boolean): Object
export function merge(obj: Object, ...sources: Object[]): Object

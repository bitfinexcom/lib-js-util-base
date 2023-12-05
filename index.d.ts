export function camelize (str: string): string
export function cloneDeep (obj: Object): Object
export function freezeDeep (obj: Object): Object
export function get (obj: Object, path: string | Array<string | number>, defaultValue: any): any
export function getArrayHasIntersect (arr1: Array<any>, arr2: Array<any>): boolean
export function getArrayUniq (arr: Array<any>): Array<any>
export function isEmpty (val: any): boolean
export function isEqual (value: any, another: any): boolean
export function isFunction (val: any): boolean
export function isNil (val: any): boolean
export function isObject (verifiable: any): Boolean
export function isPlainObject (val: any): boolean
export function max (array: Array<any>): any
export function merge (obj: Object, ...sources: Object[]): Object
export function min (array: Array<any>): any
export function omit (obj: Object, keys: Array<string>): Object
export function omitBy (obj: Object, predicate: (val: any, key: string) => boolean): Object
export function pick (obj: Object, keys: Array<string>): Object
export function pickBy (obj: Object, predicate: (val: any, key: string) => boolean): Object
export function shuffle<T> (array: Array<T>): Array<T>

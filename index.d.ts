export function assignInWith (obj: Object, ...sources: Object[]): Object
export function camelize (str: string): string
export function capitalize (str: string): string
export function cloneDeep (obj: Object): Object
export function difference (array: Array<any>, values: Array<any>): Array<any>
export function flow (funcs: Array<Function>): Function
export function freezeDeep (obj: Object): Object
export function get (obj: Object, path: string | Array<string | number>, defaultValue: any): any
export function getArrayHasIntersect (arr1: Array<any>, arr2: Array<any>): boolean
export function getArrayUniq (arr: Array<any>): Array<any>
export function getErrorMessage (obj: obj): string
export function invert (obj: Object): Object
export function groupBy<T> (array: Array<T>, key: string | ((item: T) => string)): { [key: string]: Array<T> }
export function isEmpty (val: any): boolean
export function isEqual (value: any, another: any): boolean
export function isFinite (val: any): boolean
export function isFunction (val: any): boolean
export function isNil (val: any): boolean
export function isNumber (val: any): boolean
export function isObject (verifiable: any): Boolean
export function isPlainObject (val: any): boolean
export function isString (val: any): boolean
export function mapKeys(obj: Object, mapper: (val: any, key: string) => string): Object
export function mapValues(obj: Object, mapper: (val: any, key: string) => any): Object
export function max (array: Array<any>): any
export function merge (obj: Object, ...sources: Object[]): Object
export function min (array: Array<any>): any
export function omit (obj: Object, keys: Array<string>): Object
export function omitBy (obj: Object, predicate: (val: any, key: string) => boolean): Object
export function pick (obj: Object, keys: Array<string>): Object
export function pickBy (obj: Object, predicate: (val: any, key: string) => boolean): Object
export function resolvePromiseCb<T> (err: any, res: T, cb: (err: any, res: T) => void): Promise<T>|void
export function shuffle<T> (array: Array<T>): Array<T>
export function snakeCase (str: string): string
export function sum (values: Array<string>): number
export function sumBy (values: Array, iteratee: Function | string): number
export function uniqBy (array: Array, iteratee: Function | string): Array
export function validateInput ( input: string, format: string ): Boolean
export function without (array: Array, ...values: Array): Array

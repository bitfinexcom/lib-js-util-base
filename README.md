# lib-js-util-base

General node js utils library.

Currently supported utils:
- `assignWith` - Assigns the object properties from the sources
- `camelize` - simple camel case
- `capitalize` - make first char uppercase
- `clone` - Shallow clone the object
- `cloneDeep` - deep clone functionality for objects
- `difference` - creates an array of values from the first argument not included in the second argument
- `findLastIndex` - Returns the index of the last element in the array that satisfies the provided testing function.
- `flow` - generate a composite function that returns the result of provided functions called by the chain; each previous function result passes as the argument of the next function in the chain
- `freezeDeep` - deep freezes objects
- `get` - get the object members by path
- `getArrayHasIntersect` - checks if arrays have at least one common value
- `getArrayUniq` - gets unique values form array
- `invert` - Inverts the key-value pairs of an object
- `groupBy` - groups the elements of an array by a specified key.
- `isEmpty` - checks if value is an empty object, collection, map, or set
- `isEqual` - check if passed two values are equal
- `isFinite` - checks if input is a finite number.
- `isFunction` - checks if input is a Function object.
- `isMatch` - Checks if first argument is a match with last
- `isNil` - checks whenever value is null or undefined
- `isNumber` - checks if input is a number.
- `isObject` - checks if the input is not a nullable object instance
- `isObjectLike` - Checks if passed `value` is object-like. A value is object-like if it's not `null`
- `isPlainObject` - checks if input is object, not null object and not array object
- `isString` - checks if input is a string
- `isUndefined` - checks if an input is undefined
- `mapKeys` - creates new object with the same values but with keys mapped by the provided function
- `mapValues` - Maps the values of an object or array using the provided iteratee function or property path
- `max` - computes the maximum value of array. If array is empty or falsey, undefined is returned
- `mean` - Returns the mean of an array of numbers
- `merge` - deep merge functionality for objects
- `min` - computes the minimum value of array. If array is empty or falsey, undefined is returned
- `omit` - provides new object that omits only specific fields of source object
- `omitBy` -  provides new object that omits only specific fields of source object depending on predicate function filter
- `pick` - provides new object that picks only specific fields of source object
- `pickBy` -  provides new object that picks only specific fields of source object depending on predicate function filter
- `resolvePromiseCb` -  helper to add callback support to async functions
- `sample` - returns pseudo random element on the collection
- `shuffle` - performs pseudo random shuffle on clone of the array
- `snakeCase` - convert camel case and string/dash separated strings to snake case
- `sum` - calculate sum of array items
- `sumBy` - calculate sum of array items using iteratee function or string shortcut
- `transformKeysToSnake` - transform every object key to snake case with option to be recursive
- `union` - Returns the union of the given arrays
- `uniqBy` - get unique values of array by the iteratee function or property path
- `uniqWith` - Returns a new array with unique values, using a comparator function
- `update` - Update the object with the updater by path
- `validateInput` - validates the input based on the regex format options: `NUMBER | EMAIL | PATH | NAME | NAME_WITH_DIGITS | INPUT | ADDRESS | PHONE_CODE | PHONE | IMAGE | FILE | FILENAME | PASSWORD`
- `without` - creates an array of values from the first argument excluding all given arguments

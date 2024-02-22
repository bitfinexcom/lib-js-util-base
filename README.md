# lib-js-util-base

General node js utils library.

Currently supported utils:
- `camelize` - simple camel case
- `capitalize` - make first char uppercase
- `cloneDeep` - deep clone functionality for objects
- `freezeDeep` - deep freezes objects
- `get` - get the object members by path
- `getArrayHasIntersect` - checks if arrays have at least one common value
- `getArrayUniq` - gets unique values form array
- `isEmpty` - checks if value is an empty object, collection, map, or set
- `isEqual` - check if passed two values are equal
- `isFinite` - checks if input is a finite number.
- `isFunction` - checks if input is a Function object.
- `isNil` - checks whenever value is null or undefined
- `isNumber` - checks if input is a number.
- `isObject` - checks if the input is not a nullable object instance
- `isPlainObject` - checks if input is object, not null object and not array object
- `isString` - checks if input is a string
- `mapKeys` - creates new object with the same values but with keys mapped by the provided function
- `max` - computes the maximum value of array. If array is empty or falsey, undefined is returned
- `merge` - deep merge functionality for objects
- `min` - computes the minimum value of array. If array is empty or falsey, undefined is returned
- `omit` - provides new object that omits only specific fields of source object
- `omitBy` -  provides new object that omits only specific fields of source object depending on predicate function filter
- `pick` - provides new object that picks only specific fields of source object
- `pickBy` -  provides new object that picks only specific fields of source object depending on predicate function filter
- `shuffle` - performs pseudo random shuffle on clone of the array
- `sum` - calculate sum of array items
- `sumBy` - calculate sum of array items using iteratee function or string shortcut

# lib-js-util-base

General node js utils library.

Currently supported utils:
- `camelize` - simple camel case
- `cloneDeep` - deep clone functionality for objects
- `freezeDeep` - deep freezes objects
- `get` - get the object members by path
- `getArrayHasIntersect` - checks if arrays have at least one common value
- `getArrayUniq` - gets unique values form array
- `isEmpty` - checks if value is an empty object, collection, map, or set
- `isEqual` - check if passed two values are equal
- `isFunction` - checks if input is a Function object.
- `isNil` - checks whenever value is null or undefined
- `isObject` - checks if the input is not a nullable object instance
- `isPlainObject` - checks if input is object, not null object and not array object
- `merge` - deep merge functionality for objects
- `omit` - provides new object that omits only specific fields of source object
- `omitBy` -  provides new object that omits only specific fields of source object depending on predicate function filter
- `pick` - provides new object that picks only specific fields of source object
- `pickBy` -  provides new object that picks only specific fields of source object depending on predicate function filter
- `shuffle` - performs pseudo random shuffle on clone of the array

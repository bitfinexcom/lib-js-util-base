'use strict'

const omit = (obj, path) => {
  if (obj === null) {
    return {}
  }
  
  const keys = Array.isArray(path) ? path : [path];
  const result = {};
  
  for (const key in obj) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

module.exports = omit
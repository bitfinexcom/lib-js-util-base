const flow = (fns = []) => {
  if (fns.find(fn => typeof fn !== 'function')) throw new Error('All elements should be functions')
  return (arg) => fns.reduce((acc, fn) => fn(acc), arg)
}

module.exports = flow

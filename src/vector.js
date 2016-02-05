const vectorFn = fn => (...args) =>
  args.reduce((v1, v2) => ({
    x: fn(v1.x, v2.x),
    y: fn(v1.y, v2.y)
  }))

const add = vectorFn((a,b) => a + b)

const sub = vectorFn((a,b) => a - b)

// compose :: [Function] -> a -> a
const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc),  x)

const sum = arr =>
  arr.reduce((a,b) => a + b)

export { add, sub, compose, sum}

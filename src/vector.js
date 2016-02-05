// vectorFn :: Function -> [ { Vector } ] -> { Vector }
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

// sum :: [ Int ] -> Int
const sum = arr =>
  arr.reduce((a,b) => a + b)

const notEqual = (as, bs) =>
  as.some((a,i) => a !== bs[i])

export { add, sub, compose, sum, notEqual }

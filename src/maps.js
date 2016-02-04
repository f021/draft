
import { add, sub } from './vector'

// fold :: Function -> [a] -> [a] -> [a]
const fold = fn => (arr, ...args) =>
  arr.reduce((acc, x) => {
    let val = fn(x, ...args)
    return val ? [...acc, val] : acc
  }, [])

// compose :: [Function] -> a -> a
const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc),  x)


  // indexSubIndex :: Function -> Functoin -> Function
  // const subIndex = compose(sub, xy)
  // const addIndex = compose(add, xy)

  // const getVectorMap = compose(fold, addIndex)
  // const getIndexMap = compose(fold, subIndex)

  // const getVectorMap = (arr, s) =>
  //   arr.reduce((acc, x) => x ? [...acc, sub(xy(x), xy(begin))] : acc , [])
      //  .filter(elm => typeof elm !== 'undefined')


export { compose }


// convert index of array to xy - coordinate
// array.length = field.length = w * h
// array[i] to field[x][y]
// x = i % w
// y = Math.floor(i/w)
// i = x + y * w

import { add, sub } from './vector'

// fold :: Function -> [a] -> [a] -> [a]
const fold = fn => (arr, ...args) =>
  arr.reduce((acc, x) => {
    let val = fn(x, ...args)
    return val ? [...acc, val] : acc
  }, [])

// compose :: [Function] -> a -> a
const compose = (...fns) => x =>
  fns.reduceRight((result, fn) =>
    fn(result), x)

const Field = ({ w, h, flag=true }) => {

// {x, y} for toroidal array
  const tor = ({ x, y }) => {
    const tor = (x, s) => x < 0 ? (x + s) % s : x % s;
    return {
      x: tor(x, w),
      y: tor(y, h)
    }
  }

// return index of array for { x, y }
  const plain = ({ x, y }, i = x + y * w) => {
    if ((x >= 0 && x < w) && (y >= 0 && y < h) && (i < w * h)) {
      return i;
    }
  }

// return { x, y } for plain array
  const xy = i => ({
    x: i % w,
    y: Math.floor(i / w)
  })

  // indexSubIndex :: Function -> Functoin -> Function
  const indexSubIndex = compose(sub, xy)

  // 
  const vecPlusIndex = (v, a) => add(v, xy(a))

  const getVectorMap = (arr, s) => compose(fold, addVec)
  const getIndexMap = (arr, s) => compose(fold, subVec)

  const getVectorMap = (arr, s) =>
    arr.reduce((acc, x) => x ? [...acc, sub(xy(x), xy(begin))] : acc , [])
      //  .filter(elm => typeof elm !== 'undefined')


  return {
    xy: flag ? xy : tor,
    x: flag ? plain : compose(plain, tor)

  }

}

export default Field

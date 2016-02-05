
import { compose } from './vector.js'

// convert index of array to xy - coordinate
// array.length = field.length = w * h
// array[i] to field[x][y]
// x = i % w
// y = Math.floor(i/w)
// i = x + y * w

const Field = ({ w, h, flag = true }) => {

// {x, y} for toroidal array
// tor :: { Vector } -> { Vector }
  const tor = ({ x, y }) => {
    const wrap = (x, s) => x < 0 ? (x + s) % s : x % s;
    return {
      x: wrap(x, w),
      y: wrap(y, h)
    }
  }

// return index of array for { x, y }
// or undefined if index outrange of w, h
// plain :: { Vector } -> Int
  const plain = ({ x, y }, i = x + y * w) =>
    ((x >= 0 && x < w) && (y >= 0 && y < h) && (i < w * h))
      ? i
      : undefined

// return { x, y } for plain array
// xy :: Int -> { Vector }
  const xy = i => ({
    x: i % w,
    y: Math.floor(i / w)
  })

  return {
    xy: flag ? xy : compose(tor, xy),
    x: flag ? plain : compose(plain, tor)
  }
}

export default Field

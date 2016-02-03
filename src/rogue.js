
// convert index of array to xy - coordinate
// array.length = field.length = w * h
// array[i] to field[x][y]
// x = i % w
// y = Math.floor(i/w)
// i = x + y * w

import { add, sub } from './vector'

const compose = (...fns) => x =>
  fns.reduce((result, fn) =>
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

// {x, y} for plain array
  const plain = ({ x, y }, i = x + y * w) => {
    if ((x >= 0 && x < w) && (y >= 0 && y < h) && (i < w * h)) {
      return i;
    }
  }

  const xy = i => ({
    x: i % w,
    y: Math.floor(i / w)
  })

  return {
    xy,
    x: flag ? plain : comose(tor, plain)
  }

}

export default Field

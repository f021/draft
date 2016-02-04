
import { compose } from './maps.js'

// convert index of array to xy - coordinate
// array.length = field.length = w * h
// array[i] to field[x][y]
// x = i % w
// y = Math.floor(i/w)
// i = x + y * w

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


  return {
    xy: flag ? xy : compose(tor, xy),
    x: flag ? plain : compose(plain, tor)
  }

}

export default Field


import { add, sub, compose} from './util'
import Field from './field'

const Maps = ({ w, h, flag = true }) => {

  const { x, xy } = Field({ w, h, flag })

  // getVectorMap :: { Field } -> [ Int ] -> Int -> [ { Vector } ]
  const getVectorMap = (arr, start) =>
    arr.reduce((acc, n, i) =>
      n ? [...acc, sub(xy(i), xy(start))] : acc, [])

  // getMap :: [ Vector ] -> Int -> [ Int ]
  const getIndexMap = (arr, pos) =>
     arr.reduce((acc, n) => {
       n = x(add(n, xy(pos)))
       return n !== undefined ? [...acc, n] : acc
     }, [])

  // getIndexMaps :: [ Vektor ] -> [ [ Int ] ]
  const getIndexMaps = arr =>
    Array.from(new Array(w * h), (_, i) => getIndexMap(arr, i))

  return {
    getIndexMaps,
    getVectorMap
  }
}

export default Maps

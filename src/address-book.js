import Maps from './maps'

// getAddressBook :: { Playground } -> { Pattern } -> [ [ Int ] ]
const getAddressBook = (source, target) =>
  Maps({...source}).getIndexMaps(
    Maps({...target}).getVectorMap(
      target.arr, target.startPoint))

export default getAddressBook

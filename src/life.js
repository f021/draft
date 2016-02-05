import { zip, not } from './util'
import Oracle from './oracle'

const Life = (battlefield, state) => {

  const { askFate } = Oracle(battlefield)

  let past = new Array(state.length).fill(0)

  const norm = n => n > 0 ? 1 : 0

  const same = (a, b) =>
    a > 0 && b > 0 || a + b === 0

  const isEnd = xs =>
    xs.some(([a, b]) => not(same(a, b)))

  function* run() {
    while(isEnd(zip(past, state))) {
      [ past, state ] = [[ ...state ], askFate(state)]
      let alt = yield state
      state = (alt || state).map(norm)
    }
  }

  return {
    run
  }

}



export default Life

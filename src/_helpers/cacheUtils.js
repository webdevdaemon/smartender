const rqr = paramName => {
  throw new Error(`Missing param: ${paramName}`)
}

const searchUtils = (() => {
  function update ({
    cache = {},
    roster = new Set(),
    query = rqr('query'),
    data = rqr('data')
  }) {
    return {
      cache: {
        ...cache,
        [query]: data
      },
      roster: roster.add(query)
    }
  }

  function check ({
    cache = rqr('cache'),
    roster = rqr('roster'),
    query = rqr('query')
  }) {
    return (!roster.has(query)) ? false : cache[query]
  }

  return { check, update }
})()

const { check, update } = searchUtils
export { searchUtils, check, update }

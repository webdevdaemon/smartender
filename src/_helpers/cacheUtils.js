const searchUtils = (() => {
  // add querystring to [RosterSet] (Set)
  function addToRoster(queryString = '', roster = new Set()) {
    if (!roster) return new Set(queryString)
    return new Set(roster.add(queryString))
  }
  // add key/value to [Cache] (no mutation)
  function addToCache(cacheObj = {}, currentCache = {}) {
    return {...currentCache, ...cacheObj}
  }
  // check [RosterSet] for string 
  function isCached(queryString = '', roster = new Set()) {
    return roster.has(queryString)
  }
  // return cached value from [Cache]
  function getCachedResults(queryString = '', currentCache = {}) {
    return currentCache[queryString]
  }

  return {
    rosterize: addToRoster,
    cachify: addToCache,
    getCached: getCachedResults,
    isCached,
  }
})()

export default cacheUtils




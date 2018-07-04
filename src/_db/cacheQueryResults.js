// import React from 'react'
// import { listSearchResults } from '../_helpers/searchModule'

// function updateCacheObject(currentQueryString, currentResults, componentThis) {
//   return {
//     [currentQueryString]: [...currentResults],
//     ...componentThis.state.cache
//   }
// }

// function getNewOrUsed(currentQueryString, cbToGetNew, componentThis) {
// 	const str = currentQueryString
//   const keez = Object.keys(componentThis.state.cache)
//   if (keez.includes(str)) {
//     return componentThis.state.cache[str]
//   } else {
//     const list = listSearchResults(str)
//     updateCacheObject(str, list, componentThis)
//   }
// }

// function _handleCache() {

// }
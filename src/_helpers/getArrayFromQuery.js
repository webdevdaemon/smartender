import axios from 'axios'

const queryAPI = queryStr => axios(queryStr)
const depromisify = async promise => {
  const dep = await promise.then(response => ({ ...response.data }))
  console.log(dep)
  return await dep
}



const a = Promise.resolve(queryAPI('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'))

console.log(Promise.resolve(a, response => response))
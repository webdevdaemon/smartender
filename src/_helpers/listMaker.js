import axios from 'axios'

/*-----ERROR MESSAGE-----*/
const errorMessage = `
  ERROR @ 'generateList' FAILURE!!!\n
  input invalid...\n
  arguments[0] MUST be one of three strings:\n
  "c": (Categories)\n
  "g": (Glass Type)\n
  "i": (Ingredients)\n`

/*-----Helper Strings-----*/
const preQuery = 'https://www.thecocktaildb.com/api/json/v1/1/'
const cStr = 'Category'
const gStr = 'Glass'
const iStr = 'Ingredient'

const listAllCGI = cgi => {
  const key = cgi
  switch (key) {
    case 'c':
      return axios(preQuery + 'list.php?c=list')
      break
    case 'g':
      return axios(preQuery + 'list.php?g=list')
      break
    case 'i':
      return axios(preQuery + 'list.php?i=list')
      break
    default:
      break
  }
}

const extractList = prom => {
  return prom
    .then(({ data }) => ({ raw: data }))
    .then()
    .catch()
}

const generateList = keyString => /[??cgi]/.test(keyString)

console.log({ c: generateList('c') })
console.log({ g: generateList('g') })
console.log({ i: generateList('i') })
console.log({ c: generateList('cg') })

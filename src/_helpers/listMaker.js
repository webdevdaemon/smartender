import axios from 'axios'

const preQuery = 'https://www.thecocktaildb.com/api/json/v1/1/'

const cStr = 'Category'
const gStr = 'Glass'
const iStr = 'Ingredient'

const listAllCGI = (cgi) => {
  return (switch (cgi) {
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
      throw new Error('LIST_QUERY_ERROR', { message: 'invalid argument(s).\nMUST be:\n One of the following lowercase, single-character strings\n\n: "c" (categories)\n, "g"(glass type)\n, "i"(ingredients)\n' })
      break
  })
}

// console.log({ c: listAllCGI('c')
// .then(({ data }) => {data})
// })
// console.log({ g: listAllCGI('g')
// .then(({ data }) => {data})
// })
// console.log({ i: listAllCGI('i')
// .then(({ data }) => {data})
// })
console.log({ c: listAllCGI('c')
})
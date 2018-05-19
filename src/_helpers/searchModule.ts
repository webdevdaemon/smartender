import normalize from './normalizeDrinkObject'
import axios from 'axios'

export default (function() {
  async function normalizeDrinkList(
		axiosResponse: Promise<{ data: object }>
	): Promise<object> {
    return await axiosResponse
			.then(({ data }: {data: object}) => data)
			.then(({ drinks }: {drinks: Array<object>}) => drinks)
      .then(
        (list: object[]): object[] =>
          list.length
            ? list.map((item: object): Array<object> => normalize(item))
            : [{ name: 'no drink matches', id: -1 }],
      )
      .catch(err => new Error(err))
  }

  async function listSearchResults(queryString: string) {
    return await normalizeDrinkList(axios(queryString))
  }

  async function autoComp(queryString: string): Promise<any> {
    return queryString.length
      ? await listSearchResults(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryString}`,
        )
      : []
  }

  return autoComp
})()

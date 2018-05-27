import axios from 'axios'

const dePromisify = (function() {
  async function deProm(prom) {
		const depped = await prom
			.then(stuff => stuff)	
      .catch(err => new Error(err))
    console.log(depped)
    return depped
  }
  return deProm
})()

export { dePromisify }
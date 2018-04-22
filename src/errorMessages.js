const ERROR_MODULE = (function() {

  /*
1) Add any new errors to 'errorMassagesObject' as a new property
2) then add the following to your imports list:
    import { [YOUR ERROR MESSAGE] } from [path to errorMessages.js]
3) ex: if (err) {throw new Error([YOUR ERROR MESSAGE])}
*/
 
  const errorMessagesObject = {
  errGeneric: 'ERROR, Something went wrong, please try again',

    errListMaker: `ERROR @ 'listAll' FAILURE!!!\n
  input invalid...\n
  arguments[0] MUST be one of three strings:\n
  "c": (Categories)\n
  "g": (Glass Type)\n
  "i": (Ingredients)\n`,
  }
  const modulator = function({ errGeneric, ...all }) {
    return { ...arguments[0] }
  }
  return modulator(errorMessagesObject)
}())

export default { ...ERROR_MODULE }

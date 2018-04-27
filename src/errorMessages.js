const errorMessagesObject = {
  errorGeneric: 'ERROR, Something went wrong, please try again',
  errorListPossibilities: `ERROR @ 'listAll' FAILURE!!!\n
      input invalid...\n
      arguments[0] MUST be one of three strings:\n
      "c": (Categories)\n
      "g": (Glass Type)\n
      "i": (Ingredients)\n`,
}

let { errorGeneric, ...errorListPossibilities } = errorMessagesObject

export { errorGeneric, errorListPossibilities }





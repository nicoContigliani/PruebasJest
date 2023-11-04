const { default: axios } = require("axios")



const filePruebas = async () => {
    return axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
}

const suma = (a, b) => {
    return a + b
}

module.exports = {
    filePruebas,
    suma

}


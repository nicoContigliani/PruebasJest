const { default: axios } = require("axios")



const fileAxios = async()=>{
    return axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
}

module.exports = {
    fileAxios
}

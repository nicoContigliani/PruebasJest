const { default: axios } = require("axios")

const useReducerSum = async () => {
    const numbers = [1, 2, 3, 4, 5]
    const sum = await numbers.reduce((acc, numbers) => acc + numbers, 0)
    return sum
}

const useReducerMulti = async () => {
    const numbers = [1, 2, 3, 4, 5];
    return numbers.reduce((acc, numbers) => acc * numbers, 1)
}

const useReducerMax = async () => {
    const numbers = [1, 2, 3, 4, 5];
    return numbers.reduce((acc, numbers) => Math.max(acc, numbers))
}

const useReducerMin = async () => {
    const numbers = [1, 2, 3, 4, 5];
    return numbers.reduce((acc, numbers) => Math.min(acc, numbers), Infinity)
}

const useReducerFilter = async () => {
    const numbers = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15];
    return numbers.reduce((acc, num) => {
        if (num % 2 === 0 || num > 10) {
            return acc;
        } else {
            return acc.concat(num);
        }
    }, []);
}

const masGrandeArray = async () => {
    const numbers = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15];

    const todo = numbers.reduce((acc, numbers) => Math.max(acc, numbers))
    const todos = numbers.reduce((acc, numbers) => acc > numbers ? acc : numbers)

    return todo
}
//with  string

const stringJoin = async () => {
    const TextS = "ho la"
    const textoArray = TextS.split(" ")
    return await textoArray.reduce((acc, element) => acc + element, "");
}

const axiosGetRandomUSer = async () => {
    try {
        const resultR = await axios.get('https://random-data-api.com/api/v2/users?size=1&is_xml=true')
        return resultR

    } catch (error) {
        throw console.error();
    }
}
const pokeApi = async (city) => {
    try {

        return await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    } catch (error) {
        throw console.error();
    }
}

const invertirCadena = (cadena) => {

    return ([...cadena]
        .reverse())
        .join("")
        .replace(/^,/, "");
}


const invertirCadenaReduce = (cadena) => {
    return cadena.split("").reduce((acc, char) => char + acc, "")
}


const changeV = async (data) => {
    return data.replace(/[aeiouáéíóú]/gi, "_");
}

const countleter = async (data) => {
    return [...data].length
}

const countleterReducer = async (data) => {
    return data
        .split("")
        .reduce((acc, char) => acc + 1, 0)
}

const orderWords = async (data) => {
    return data.split(" ").sort().join(" ")
}



const objectIn = async (data) => {
    return Object.keys(data).includes("nombre")

}
const conjuntoS = (data) => {

    return (data.sort((a, b) => b.edad - a.edad))

}
const conjuntoN = (data) => {

    const todo = Object.values(data)
    const todoR = todo.filter(item => typeof item !== "string")
    return Math.floor(todoR.reduce((acc, char) => acc * char))
}

//Escribe una función que reciba un objeto como parámetro y devuelva un arreglo con las claves del objeto ordenadas alfabéticamente.

const orderKeyObject = (data) => {
    return Object.keys(data).sort()
}

//Escribe una función que reciba un objeto como parámetro y devuelva un objeto con las claves y valores invertidos.

const objectInvert = (data) => {
    const objectDataKeys = Object.keys(data)
    const objectDataValues = Object.values(data)
    let objectS = {}
    for (let i = 0; i < objectDataKeys.length; i++) {
        objectS[objectDataKeys[i]] = objectDataValues[i];
    }
    return Object.entries(data).reduce((acc, [valor, clave]) => ({
        ...acc,
        [clave]: valor
    }), {})

}

//Escribe una función que reciba un arreglo de números como parámetro y devuelva un nuevo arreglo con los números pares.
const nPares = (data) => {
    return data.filter(item => item % 2 === 0)
}

//Escribe una función que reciba un arreglo de números como parámetro y devuelva el número más grande.

const MayorArray = (data) => {
    return data.reduce((acc, chat) => Math.max(acc, chat), -Infinity)
}
//Escribe una función que reciba un arreglo de números como parámetro y devuelva un nuevo arreglo con los números duplicados eliminados.
const arregloNumerosDuplicados = (data) => {
    return [...new Set(data)];
}
//Cuales son los núeros eliminados del array anterior 
const arregloNumerosDuplicadosEliminados = (data) => {
    const duplicateArray = []
    data.sort()
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (data[index + 1] === data[index]) duplicateArray.push(element)
    }
    return data.filter((item, index) => item === data[index + 1])
}

//Para calcular el promedio de un arreglo de números 
const promNumber = (data) => {
    return (data.reduce((acc, numbers) => acc + numbers, 0)) / data.length
}

//Ejercicio: Dado un arreglo de números, escribe un código para encontrar el número más pequeño.

const NumberMin = (data) => {
    return Math.min(...data)
}
//Dado un arreglo de números, escribe un código para encontrar el número más común
//valor repetido más alto

const repetidoMasAlto = (data) => {

    data.sort()
    const todo = data.reduce((acc,valor,index)=>{
        if(valor===data[index+1])acc.push(valor)
        return acc
    },[])
    console.log("🚀 ~ file: reducers.js:185 ~ todo ~ todo:", todo)
    return Math.max(...data.filter((valor, index) => valor === data[index + 1]))

}



module.exports = {
    useReducerSum,
    useReducerMulti,
    useReducerMax,
    useReducerMin,
    useReducerFilter,
    masGrandeArray,
    stringJoin,
    axiosGetRandomUSer,
    pokeApi,
    invertirCadena,
    invertirCadenaReduce,
    changeV,
    countleter,
    countleterReducer,
    orderWords,
    objectIn,
    conjuntoS,
    conjuntoN,
    orderKeyObject,
    objectInvert,
    nPares,
    MayorArray,
    arregloNumerosDuplicados,
    arregloNumerosDuplicadosEliminados,
    promNumber,
    NumberMin,
    repetidoMasAlto
}
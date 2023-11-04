global.jest = require('jest');

const { useReducerSum,
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
    repetidoMasAlto,
} = require("./reducers")

describe('reducer pruebas', () => {

    test('reducerSuma ', async () => {

        const resultData = await useReducerSum()
        await expect(resultData).toBe(15)
    })
    test('reducerMulti', async () => {
        const resultData = await useReducerMulti()
        await expect(resultData).toBe(120)
    })
    test('useReducerMax ', async () => {
        const resultData = await useReducerMax()
        await expect(resultData).toBe(5)
    })

    test('useReducerFilter ', async () => {
        const resultData = await useReducerFilter()
        const expectedResult = [1, 3, 5];

        await expect(resultData).toEqual(expectedResult);
    })


    test('masGrandeArray', async () => {
        const numbers = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15];
        const dataR = await masGrandeArray()
        const expectedResult = 15;
        await expect(numbers).toContain(15)
        await expect(dataR).toEqual(expectedResult);

    })
    test('string', async () => {
        const TextS = "ho la"
        const expectedResult = "hola"
        const dataR = await stringJoin()
        await expect(dataR).toEqual(expectedResult);

        await expect(dataR).not.toBeUndefined()
        await expect(dataR).toMatch(/hola/)

    })
})


describe('axiosGetRandomUSerS', () => {
    test('should Defined', async () => {
        const todoReturn = await axiosGetRandomUSer()
        expect(todoReturn).toBeDefined();
    })
    test('Truthy ', async () => {
        const todoReturn = await axiosGetRandomUSer()
        expect(todoReturn).toBeTruthy();

    })
    test('Is object ', async () => {
        const todoReturn = await axiosGetRandomUSer()
        expect((typeof todoReturn) === 'object').toBeTruthy();
    })
    test('Is element  id in object isnt null ', async () => {
        const todoReturn = await axiosGetRandomUSer()
        let {
            data: { id }
        } = todoReturn
        expect(id).toBeTruthy();
        expect(id).not.toBeNull();
    })
})




describe('mocks', () => {
    test('fist mock', () => {
        const myFunction = jest.fn();
        myFunction();
        // Verifica que la función se haya llamado una vez
        expect(myFunction).toHaveBeenCalledTimes(1);
    })
    test('Verifica que la función devuelva el valor especificado', () => {
        const myFunction = jest.fn();
        myFunction.mockReturnValue(123);
        expect(myFunction()).toBe(123);
    })

})

// jest.mock("siTodo")
// const fetch = jest.fn().mockReturnValue({
//     name: "Buenos Aires",
//     main: {
//         temp: 25,
//         feels_like: 22,
//     },

// })

describe('pokeApi', () => {
    test('pokeApi ', async () => {
        const apiData = await pokeApi()

    })

});

describe('invertirCadena', () => {
    test('invertirCadena ', async () => {
        const expectedResult = "!odnum ,aloH"
        const data = "Hola, mundo!"
        const apiData = await invertirCadena(data)
        await expect(apiData).toEqual(expectedResult);
    })
});

describe('invertirCadenaReduce', () => {
    test('invertirCadenaReduce', async () => {
        const expectedResult = "!odnum ,aloH"
        const data = "Hola, mundo!"
        const apiData = await invertirCadenaReduce(data)
        await expect(apiData).toEqual(expectedResult);
    });
})


describe('vocales cambiadas', () => {
    test('cambio de vocales', async () => {
        const expectedResult = "H_l_, m_nd_!"
        const data = "Hola, mundo!"
        const apiData = await changeV(data)
        await expect(apiData).toEqual(expectedResult);
    })
});

describe('countleter', () => {
    test('countleter', async () => {
        const cadena = "hola"
        const todo = await countleter(cadena)


        await expect(todo).toBe(4);
        await expect(todo).not.toBeNull()
        await expect(todo).not.toBeUndefined()
    })

})
describe('countleterReducer', () => {
    test('countleterReducer', async () => {
        const cadena = "hola"
        const todo = await countleterReducer(cadena)


        await expect(todo).toBe(4);
        await expect(todo).not.toBeNull()
        await expect(todo).not.toBeUndefined()
    });
})

describe('orderWords', () => {
    test('orderWords', async () => {
        const data = "volver a esto"
        const expectedResult = "a esto volver"
        const todo = await orderWords(data)
        await expect(todo).not.toBeNull()
        await expect(todo).not.toBeUndefined()
        await expect(typeof todo === "string").toBeTruthy();
        await expect(todo).toEqual(expectedResult);
    })

});




describe('objectIn', () => {
    const objetos = {
        nombre: "Juan",
        edad: 25,
    };
    test('objectIn', async () => {
        const todo = await objectIn(objetos)

        expect(objetos).toEqual({
            nombre: "Juan",
            edad: 25,
        })

        expect(objetos instanceof Object).toBe(true);
        expect(typeof objetos === "object").toBeTruthy()

        expect(objetos.nombre).toBe('Juan');
        expect(objetos instanceof Object).toBe(true);
    });

})

describe('', () => {
    const objetos =
        { nombre: "Juan", edad: 25 }

    test('debe tener una propiedad nombre', async () => {
        expect(Object.keys(objetos).includes("nombre")).toBe(true);
        expect(Object.keys(objetos).includes("edad")).toBe(true);
    });

    test('should ', async () => {

        const todo = await objectIn(objetos)
        await expect(todo).toBeTruthy()
    })

})

describe("conjuntoS", () => {
    const objetos = [
        { nombre: "Juan", edad: 20 },
        { nombre: "Pedro", edad: 30 },
        { nombre: "María", edad: 25 },
    ];
    const dataPrueba = conjuntoS(objetos)
    const dataMax = dataPrueba[0].edad
    const dataMin = dataPrueba[dataPrueba.length - 1].edad
    test('max ', () => {
        expect(dataMax).toBe(30)
    });
    test('max ', () => {
        expect(dataMin).toBe(20)
    });
})

describe("conjuntoN", () => {
    const objeto = {
        nombre: "Juan",
        edad: 25,
        altura: 1.70,
    };
    const todo = conjuntoN(objeto)

    test('reduce ', () => {
        expect(todo).toBeTruthy()
        expect(todo).toBe(42)
    });
})

describe("orderKeyObject", () => {

    const objeto = {
        nombre: "Juan",
        edad: 25,
        altura: 1.70,
    };

    ////Escribe una función que reciba un objeto como parámetro y devuelva un arreglo con las claves del objeto ordenadas alfabéticamente.

    test('orderKeyObjectExist', () => {
        const todo = orderKeyObject(objeto)
        expect(todo).toBeTruthy()
        expect(todo).not.toBeNull()
    })
    test('should ', () => {
        const todo = orderKeyObject(objeto)
        const ArrayReturnExpect = ["altura", "edad", "nombre"]
        expect(todo).toEqual(ArrayReturnExpect)
    });
})


describe("objectInvert", () => {
    const objeto = {
        nombre: "Juan",
        edad: 25,
        altura: 1.70,
    };
    const data = objectInvert(objeto)
    test('objectInvertExist', () => {
        expect(data).toBeTruthy()
        expect(data).not.toBeNull()
        expect(typeof data === "object").toBeTruthy()
    });
    test('objectInvert', () => {
        const dataExpected = { "Juan": "nombre", 25: "edad", 1.7: "altura" }
        expect(data).toEqual(dataExpected)
    });

})

describe('nPares', () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const parTest = nPares(numeros)
    test('parTestExist', () => {
        expect(parTest).not.toBeNull()
        expect(parTest).not.toBeUndefined()
        expect(parTest instanceof Array).toBeTruthy();
        expect(Array.isArray(parTest)).toBeTruthy();
    })

    test('nPares', () => {
        const dataExpect = [2, 4, 6]
        expect(parTest).toEqual(dataExpect)

    })

});

describe('', () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const data = MayorArray(numeros)
    test('isArray? ', async () => {
        expect(numeros instanceof Array).toBeTruthy();
        expect(Array.isArray(numeros)).toBeTruthy();
    });
    test('is number ReturnDataFuntion', () => {
        expect(typeof data === "number").toBeTruthy()
        expect(data).not.toBeNull()
        expect(data).not.toBeUndefined()
    })

    test('max', async () => {
        expect(data).toBe(6)
    });
})

describe('arregloNumerosDuplicados', () => {
    const numeros = [1, 2, 3, 1, 2, 4];

    const data = arregloNumerosDuplicados(numeros)

    test('isArray', () => {
        expect(Array.isArray(numeros)).toBeTruthy()
        expect(numeros).not.toBeNull()
    })

    test('returnExist', () => {
        expect(data).not.toBeNull()
        expect(data).not.toBeUndefined()
    })

    test('return diplicates', () => {
        const dataExpect = [1, 2, 3, 4]
        expect(data).toEqual(dataExpect)
    });

})
describe('arregloNumerosDuplicadosEliminados', () => {
    const numeros = [1, 2, 3, 1, 2, 4];

    const data = arregloNumerosDuplicadosEliminados(numeros)

    test('isArray', () => {
        expect(Array.isArray(numeros)).toBeTruthy()
        expect(numeros).not.toBeNull()
    })

    test('returnExist', () => {
        expect(data).not.toBeNull()
        expect(data).not.toBeUndefined()
    })

    test('return diplicates', () => {
        const dataExpect = [1, 2]
        expect(data).toEqual(dataExpect)
    });

})

describe("promNumbee", () => {
    const numbers = [1, 2, 3, 4, 5];
    const dataR = promNumber(numbers)

    test('ExistReturn ', () => {
        expect(dataR).toBeTruthy()
        expect(dataR).toBeDefined()
        expect(dataR).not.toBeNull()
    })

    test('promedio ', () => {
        const dataExpect = 3
        expect(dataR).toEqual(dataExpect)
    })


})

describe('NumberMin', () => {
    const numbers = [1, 2, 3, 4, 5];
    const dataR = NumberMin(numbers)

    test('arrayInitialExist', () => {
        expect(Array.isArray(numbers)).toBeTruthy()
        expect(numbers.length !== 0).toBeTruthy()
    })
    test('numberReturn', () => {
        expect(dataR).toBeTruthy()
        expect(dataR).not.toBeNull()
    });

    test('NumberMin', () => {
        expect(dataR).toBe(1)
        expect(Math.min(...numbers)).toBe(1)
    })

});
describe('repetidoMasAlto', () => {

    const data = [1, 2, 3, 1, 2, 4];
    const dataReturnFuntion = repetidoMasAlto(data)

    test('ExistDataReturnFuntionData ', () => {
       expect(dataReturnFuntion).toBeTruthy()
       expect(dataReturnFuntion).not.toBeNull()  
    });

    test('repetidoMasAlto', () => {
     expect(dataReturnFuntion).toBe(2)
    })

})

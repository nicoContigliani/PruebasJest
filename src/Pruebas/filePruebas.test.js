const { filePruebas, suma } = require("./filePruebas")
const { fileAxios } = require("../axiosFolder/fileAxios")

//para función 
describe('funciones', () => {
    it("devuelve el valor correcto", () => {
        const sumaData = suma(1, 2)
        expect(sumaData).toBe(3)
    })
    it("debo pasar valores correctos", () => {
        expect(() => miFuncion("hola", "mundo")).toThrow();
    })

})
describe('Axios', () => {
    test('devuelve 200', async () => {
        const respuesta = await fileAxios()
        expect(respuesta.status).toBe(200)
    })
    test('eficiencia en tiempo-realiza la tarea antes de 5 segundos?', async () => {
        jest.setTimeout(5000);
        const respuesta = await fileAxios()
    })

})

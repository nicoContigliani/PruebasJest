const { fileAxios } = require("./fileAxios")


test('axiosObject', async () => {
    const todo = await fileAxios()
    expect(todo instanceof Object).toBe(true);
})

test('axiosObject', async () => {
    const todo = await fileAxios()
    expect(typeof todo).toBe('object');
})

test('axios200', async () => {
    const todo = await fileAxios()
    expect(todo.status).toBe(200);
})
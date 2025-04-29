const express = require('express')

const PORTA = 8000

const server = express

server.get('/soma', () => {
    const resultado = soma(1,2)
    res.end(`o resultado da soma é ${resultado}`)
})
server.get('/diminui', () => {
    const resultado = subtrair(1,2)
    res.end(`o resultado da subtração é ${resultado}`)
})
server.get('/multiplica', () => {
    const resultado = multiplicar(1,2)
    res.end(`o resultado da multiplicação é ${resultado}`)
})
server.get('/dividi', () => {
    const resultado = dividir(1,2)
    res.end(`o resultado da divizão é ${resultado}`)
})

server.listen(PORTA, () => {
    console.log(`o servidor esta online na porta ${PORTA}`)
})

function soma(num1, num2) {
    return num1 + num2
}
function subtrair(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    return num1 % num2
}
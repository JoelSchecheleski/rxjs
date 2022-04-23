// Os dois tipos...
// 1. Operadores de Criação
// 2. Operadores Encadeáveis (Pipeable Op.)


const { of, from } = require('rxjs')
const { last, map } = require('rxjs/operators')

// A partir de um conjunto
// of(1,2,'ana', false, 'último')
//     .pipe(
//         last(),
//         map(v => v[0]),
//         map(v => `A tetra encontrada foi: ${v}`)
//     )
//     .subscribe(function(valor)  {
//         console.log(valor)
//     })

// A partir de um array
// 1. Operadores de Criação
from([1,2,'ana', false, 'último'])
    .pipe(
        last(), // 2. Operadores Encadeáveis (Pipeable Op.)
        map(v => v[0]),
        map(v => `A tetra encontrada foi: ${v}`)
    )
    .subscribe(function(valor)  {
        console.log(valor)
    })
    

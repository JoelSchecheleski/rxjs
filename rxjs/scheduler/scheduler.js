const { from, asyncScheduler } = require('rxjs')
const { observeOn } = require('rxjs/operators')

// Esse exemplo acontece de forma sincrono
// console.log('Antes...')
// from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//     .pipe(observeOn(asyncScheduler))
//     .subscribe(console.log)
// console.log('Depois...')

// Esse exemplo acontece de forma assíncrono
console.log('Antes...')
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe(observeOn(asyncScheduler)) // observeOn | asyncScheduler =
    .subscribe(console.log)
console.log('Depois...')

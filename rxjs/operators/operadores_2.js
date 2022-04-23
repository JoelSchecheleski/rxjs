const { XMLHttpRequest } = require('xmlhttprequest')
const {map, concatAll} = require('rxjs/operators')
const { ajax } = require('rxjs/ajax')
const {interval} = require('rxjs')

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/JoelSchecheleski/repos'
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),
        map(repo => repo.full_name)
    )
    .subscribe(console.log)
console.log('Fim!')


/**
 * EXEMPLO CONCATALL
 *  Usando o concatAll para  transformar um High Order Obvservables em First Order Observables
 */
// interval(1000)
//     .pipe(
//         map(_ => [1,2,3]),
//         concatAll() // concatAll? manda para frete os valores e não o array completo,
//     )
//     .subscribe(console.log)

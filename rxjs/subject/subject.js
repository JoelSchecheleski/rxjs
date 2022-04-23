const { Observable, Subject } = require('rxjs')

// Com o padrão Observable a chamada ocorre duas vezes por conta de ter 2 interessados na chamada
// console.log (2x)
function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('#1 Observable...')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 1000)
    })
}

const obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)

// -----------------------------------------------------

// Já no uso do Subject é passado o mesmo valor para todos os interessados da chamada, nesse caso os 2 console.log
// receberão o mesmo valor.
function getSubject() {
    const sub = new Subject()
    setTimeout(() => {
        console.log('#2 Subject...')
        sub.next(Math.random())
        sub.complete()
    }, 1000)
    return sub
}

const sub = getSubject()
sub.subscribe(console.log)
sub.subscribe(console.log)

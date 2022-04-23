const { from, Observable } = require('rxjs')

function primeiro() {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(value) {
                    subscriber.next(value)
                    subscriber.complete() // pega somente o primeiro
                }
            })
        })
    }
}

function ultimo() {
    return function (source) {
        return Observable.create(subscriber => {
            let _ultimo
            source.subscribe({
                next(v) {
                    _ultimo = v
                },
                complete() {
                    if(_ultimo !== undefined) {
                        subscriber.next(_ultimo)
                    }
                    subscriber.complete()
                } // pega somente o primeiro
            })
        })
    }
}

function nenhum() {
    return function(source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.complete()
                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
    .pipe(
        // primeiro(),
        // nenhum(),
        ultimo()
    )
    .subscribe(console.log)

const {of, Observable} = require('rxjs')
const {next} = require("lodash/seq");

function terminadoCom(finalText) {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(value) {
                    if(Array.isArray(value)) {
                        subscriber.next(
                            value.filter(el => el.endsWith(finalText))
                        )
                    } else if(value.endsWith(finalText)) {
                        subscriber.next(value)
                    }
                },
                error(err) {
                    subscriber.error(err)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }
}


of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
    .pipe(terminadoCom('va'))
    .subscribe(console.log)

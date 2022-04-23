const {of, Observable} = require('rxjs')
const {next} = require("lodash/seq");
const {subscribeOn} = require("rxjs/operators");

function terminadoCom(finalText) {
    return function (source) {
        return Observable.create(resolver => {
            source.subscribe({
                next(value) {
                    if (Array.isArray(value)) {
                        resolver.next(value.filter(el => el.endsWith(finalText)))
                    } else if (value.endsWith(finalText)) {
                        resolver.next(value)
                    }
                },
                error(value) {
                    resolver.next(value)
                },
                complete() {
                    resolver.complete()
                }
            })
        })
    }
}

of(['Joana Darque', 'Marina Katcheski', 'Miguel Mileski', 'Joel Schecheleski'])
    .pipe(terminadoCom('ski'))
    .subscribe(console.log)

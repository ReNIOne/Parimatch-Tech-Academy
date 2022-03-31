const extendWithEndless = function (...objects) {
    let new_object = {};
    for (let char of objects) {
        let keys = Object.keys(char);
        for (let key of keys) {
            new_object[key] = char[key];
        }
    }
    return new_object
}

console.log(extendWithEndless(
    {first: true},

    {ok: true},

    {first: 101},

    {badRequest: false},


    {
        ok: false,

        badRequest: true

    }
));
const extendWith = function (first_obj, second_obg){
    return {...second_obg, ...first_obj}
}

let first_obg = {
    one: 'true',
    ok: 'true',
}
let second_obj = {
    one: 11,
    badRequest: false,
}

console.log(extendWith(first_obg, second_obj));
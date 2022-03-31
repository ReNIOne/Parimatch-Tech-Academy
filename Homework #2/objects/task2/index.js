
const users = require('../array.js');

let search_id = prompt('Введите искомый id:', null);
let founded = undefined;
if (search_id === null || search_id === ''){
    alert('Нечего искать')
}
else{
    for (let char of array){
        if (char.id === Number(search_id)){
            founded = char;
        }
    }
}
if (founded === undefined){
    alert('Массива с таким id нет')
}
else{
    console.log('Данные массива:', founded);
}
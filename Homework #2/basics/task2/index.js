const month = prompt("Введите название месяца:");
const monthToLowerCase = month.toLowerCase();
switch (monthToLowerCase){
    case '1':
        alert("January");
        break;
    case '2':
        alert("February");
        break;
    case '3':
        alert("March");
        break;
    case '4':
        alert("April");
        break;
    case '5':
        alert("May");
        break;
    case '6':
        alert("June");
        break;
    case '7':
        alert("July");
        break;
    case '8':
        alert("August");
        break;
    case '9':
        alert("September");
        break;
    case '10':
        alert("October");
        break;
    case '11':
        alert("November");
        break;
    case '12':
        alert("December");
        break;
    case 'january':
        alert('January = 1');
        break;
    case 'february':
        alert('February = 2');
        break;
    case 'march':
        alert('March = 3');
        break;
    case 'april':
        alert('April = 4');
        break;
    case 'may':
        alert('May = 5');
        break;
    case 'june':
        alert('June = 6');
        break;
    case 'july':
        alert('July = 7');
        break;
    case 'august':
        alert('August = 8');
        break;
    case 'september':
        alert('September = 9');
        break;
    case 'october':
        alert('October = 10');
        break;
    case 'november':
        alert('November = 11');
        break;
    case 'december':
        alert('December = 12');
        break;
    default:
        alert('Вы допустили ошибку')
}
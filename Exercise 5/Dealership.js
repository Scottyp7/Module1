
var employee = {
    "first_name": "Sammy",
    "last_name": "Shark",
    "Job_Title": "Sales rep",
    "Salery": "120,000"
}

let Dealership = ["cars", "employees", ]



let showroom = ['Volvo', 'Ford', 'Kia', 'Honda', 'VW'];
let showroomindex = showroom.indexOf('Ford')
showroom.push('Tesla')
showroom.unshift('Nissan')

console.log(showroomindex);
console.log(showroom);

showroom.splice(1,1)
showroom.splice(4,1)
console.log(showroom)

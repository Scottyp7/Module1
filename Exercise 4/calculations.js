function multiply(a, b)//Declares a function
{ 
console.log(a * b) //part of the function to tell print the result on the console. must be above return
return a * b // returns a value before its printed into the console.

}

function add(a, b)//Declares a function
{ 
return a + b
}
function minus(a, b)//Declares a function
{ 
    return a - b
console.log(a - b) //part of the function to tell it what calculation to do
}

function divide(a, b)//Declares a function
{ 
    return a / b
console.log(a / b) //part of the function to tell it what calculation to do
}
console.log(add(7,9)) 
console.log(minus(54,12))

// if statements checks conditions between 2 elements and displays either true or false

if(add(6,2)!=6){console.log("success")} // Completes the calculations and displys success if correct
    else {console.log("failed")}; // displays failed is calc is not true

if(minus(6,1)!=5){console.log("correct")}
    else{console.log}("incorrect")

if(divide(6,1)!=5){console.log("complete")}
    else{console.log}("not complete")


function PrintLinesOnConsole(Text)
{
    var name = 'Hello '
    name += Text
console.log(name)
}



PrintLinesOnConsole("Scott")

function PrintLinesOnConsole2(Text2) // to print text onto the console
{
  let girlfriend = 'Sarah '
  girlfriend += Text2 // defines girlfriend as the same as text 2
console.log(girlfriend) // prints the value of girlfriend on the console
}

PrintLinesOnConsole2("Galloway") // prints girlfriend and text 2 on the console
// the end result will be sarah galloway



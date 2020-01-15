// This part of the code defines a function 

function add(a,b) { 
    return a + b
}

function subtract(a,b) { 
    return a - b
}

function multiply(a,b) { 
    return a * b
}

function divide(a,b) { 
    return a / b
}

// This part of the code then calls that function and assigns the variable x to its return value
console.log("I'm going use the calculator functions to add 5 and 6")
var x = add(5,6)

console.log("I'm going use the calculator functions to subtract 5 and 6")
var x = subtract(5,6)

console.log("I'm going use the calculator functions to multiply 5 and 6")
var x = multiply(5,6)

console.log("I'm going use the calculator functions to divide 5 and 6")
var x = divide(5,6)

// This prints x to the terminal for humans to read
console.log(x)
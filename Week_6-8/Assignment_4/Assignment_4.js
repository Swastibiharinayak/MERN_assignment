// Calculate Area of Triangle (Sides: 5, 6, 7)

let a=5
let b=6
let c=7

// using heron's formula
let s=(a+b+c)/2 // semi perimeter

let area=Math.sqrt(s*(s-a)*(s-b)*(s-c)) 
console.log(area)

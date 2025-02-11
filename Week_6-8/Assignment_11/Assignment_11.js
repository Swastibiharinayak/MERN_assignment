function cTof(celsius) {
    var fahrenheit = celsius * 9/5 + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`);
}

function fToc(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius}°C`); 
}

cTof(60)
fToc(89.60)

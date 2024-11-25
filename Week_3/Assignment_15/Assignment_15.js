let arr1 = [];
for (let i=0; i<3; i++){
    arr1.push(parseInt(prompt(`Enter a number for Array_1 ${i+1}:`)));
}

let arr2 = [];
for (let i=0; i<3; i++){
    arr2.push(parseInt(prompt(`Enter a number for Array_2 ${i+1}:`)));
}

let merged = [...new Set([...arr1, ...arr2])];

alert(`Merged array: ${merged}`);

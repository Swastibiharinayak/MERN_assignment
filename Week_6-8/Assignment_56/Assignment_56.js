function num_with_commas(num1, num2){
    if(num2 === 0){
        return "Can't be divided"
    }
    let result = num1 / num2;
    let formatted_result = result.toLocaleString();
    return formatted_result;
}
console.log(num_with_commas(1005678, 2)); 

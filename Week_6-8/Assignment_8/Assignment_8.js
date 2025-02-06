// Random Integer Guess Game

let guess= parseInt(prompt("Guess the number between 1 and 10"));
let number = Math.round(Math.random()*10);


if(guess === number){
    alert("Good Work");
}else{  
    alert(`
        Not matched
        The number was:  ${number}`
    );
}

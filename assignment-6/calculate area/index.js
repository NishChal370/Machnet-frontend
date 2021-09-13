const lengthh = document.getElementById('length');
const breadth = document.getElementById('breadth');
const button = document.querySelector('.submit__button');
const answer = document.querySelector('.answer');

button.addEventListener('click',()=>{
    const regax= "[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)"
    if( (lengthh.value).match(regax) && (breadth.value).match(regax) ){
        let area = lengthh.value*breadth.value;
        button.style.display ='none';
        
        answer.innerHTML= `Area of length: ${lengthh.value} and breadth: ${breadth.value} is ${area}`
    }
    else{
        alert("Invalid input");
    }

});
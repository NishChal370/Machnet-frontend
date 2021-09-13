const btnHappy =  document.querySelector(".happy__button");
const btnSad =  document.querySelector(".sad__button");
const btnDepressed =  document.querySelector(".depressed__button");

// we can also do 
/*
btnHappy.setAttribute('name','group1');
btnSad.setAttribute('name','group1');
btnDepressed.setAttribute('name','group1');
*/

const checkClick = (btnNumber)=>{
    if(btnNumber === 'happy'){
        
        btnHappy.checked = true;
        btnSad.checked = false;
        btnDepressed.checked = false;
    }
    else if(btnNumber === 'sad'){
        btnHappy.checked = false;
        btnSad.checked = true;
        btnDepressed.checked = false;
    }
    else if(btnNumber === 'depressed'){
        btnHappy.checked = false;
        btnSad.checked = false;
        btnDepressed.checked = true;
    }
}

btnHappy.addEventListener('click',()=>checkClick('happy'));
btnSad.addEventListener('click',()=>checkClick('sad'));
btnDepressed.addEventListener('click',()=>checkClick('depressed'));
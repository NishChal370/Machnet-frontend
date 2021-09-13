const input = document.querySelector('input');

input.addEventListener("keydown", (event) => {

    if(event.key === 'Enter'){
        // console.log(input.value);
        let valueInUppercase = (input.value).toUpperCase();
        input.value = valueInUppercase;
        input.style.color = 'red';
    }

});


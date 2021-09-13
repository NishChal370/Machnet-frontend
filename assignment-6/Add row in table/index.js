const tableBody = document.querySelector('tbody');
const firstName = document.getElementById('firstName');
const lastName  = document.getElementById('lastName');
const address = document.getElementById('address');
const phone =  document.getElementById('phone');
const button = document.querySelector('.submit__button');

const clearInput=()=>{
    firstName.value ='';
    lastName.value ='';
    address.value ='';
    phone.value ='';
}


button.addEventListener('click',()=>{

    if(firstName.value.trim() !== '' && lastName.value.trim() !== '' && address.value.trim() !== '' && phone.value.trim() !== ''){
        tableBody.innerHTML +=`
            <tr>
                <td>${firstName.value}</td>
                <td>${lastName.value}</td>
                <td>${address.value}</td>
                <td>${phone.value}</td>
            </tr>`;

        clearInput();
    }
    else{
        alert("empty");
    }
  
});


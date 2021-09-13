const imagesList = [
    'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/1862047/pexels-photo-1862047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2955703/pexels-photo-2955703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

let presentingImageIndex = 0;
let imageChangingTime;

const image = document.querySelector('.slider__img');
const previousButton = document.querySelector('.button__previous');
const nextButton = document.querySelector('.button__next');
const imageIndex = document.querySelector('.image__index');
const bottomRadioButton = document.querySelector('.bottom__radiobutton');

imageIndex.innerHTML = (presentingImageIndex+1) + ' of ' + imagesList.length;

// adding radio button at the end of image container
const createRadioButton =  ()=>{
    for(let i =0; i<= imagesList.length; i++){
        const radioButton =document.createElement("input");
        radioButton.disabled = true;
        radioButton.setAttribute('type','radio');
        radioButton.setAttribute('name','group1');
        bottomRadioButton.appendChild(radioButton);
    }
}


const changeHandler = (buttonType) =>{

    clearTimeout(imageChangingTime);
    if(buttonType === 'next' || buttonType === 'auto'){
        (presentingImageIndex >= (imagesList.length-1) )
            ? presentingImageIndex = 0
            : presentingImageIndex += 1
        
    }
    else{
        (presentingImageIndex <= 0)
            ? presentingImageIndex = imagesList.length-1
            : presentingImageIndex -= 1
        
    }

    
    image.src = imagesList[presentingImageIndex];
    imageIndex.innerHTML = (presentingImageIndex+1) + ' of ' + imagesList.length;
    imageChangingTime = setTimeout(()=>changeHandler('auto'), 4000);
    

}

createRadioButton();
imageChangingTime = setTimeout(()=>changeHandler('auto'), 4000);

previousButton.addEventListener('click',()=>changeHandler('prev'));
nextButton.addEventListener('click',()=>changeHandler('next'));
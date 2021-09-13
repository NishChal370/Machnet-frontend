const text = document.querySelector('p');

text.addEventListener('mouseover',()=>{
    text.style.cursor= 'pointer';
    text.style.textShadow = '2px 2px 4px #2f00ff';
    text.style.fontWeight ='bold';
    text.style.color='red'

});


text.addEventListener('mouseout',()=>{
    text.style.textShadow = 'none';
    text.style.fontWeight ='100';
    text.style.color='#2f00ff'
});


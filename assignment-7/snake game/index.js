const container = document.querySelector('.container');
const noticeStatus = document.querySelector('.status');
const startButton = document.querySelector('.start__button');
const stopButton = document.querySelector('.stop__button');
const scoreBoard = document.querySelector('.score__board');

let gameOverAudio = new Audio('gameover.mp3');
let snakeArray=[{x:1, y:2}];

let snakeTailPosition = {x:"", y: ""};

let foodPosition ={
    x: Math.floor(Math.random() * 14)+4 ,
    y: Math.floor(Math.random() * 14)+4 
};

let score = 0;
let runTime = 0;
let foodTime = 0;
let startGame = false;
let snakeDirection = "";

function main(){
    runTime ++;
    foodTime ++;

    if(runTime >= 20){
        moveSnake(snakeDirection);
        runTime  = 0;
    };

    if(foodTime >= 400){
        foodPosition = {
            x: Math.floor(Math.random() * 14)+4 ,
            y: Math.floor(Math.random() * 14)+4
        };
        foodTime = 0;
    };
    
    drawSnake();
    drawFood();
    scoreBoard.innerHTML= "Score : "+score;

    if(!borderCollide() && startGame && !selfCollide()){
        requestAnimationFrame(main);
    }     
}

function drawSnake(){
    container.innerHTML = '';

    snakeArray.forEach((position, index)=>{
        const snake = document.createElement('div');
        snake.style.margin= '2px';
        snake.style.gridRowStart = position.y;
        snake.style.gridColumnStart = position.x;

        if(index === 0){
            snake.style.backgroundColor ='purple';
        }
        else{
            snake.style.backgroundColor ='black';
        }

        container.appendChild(snake);
    });
}

function drawFood(){
    const food = document.createElement('div');
    food.style.background='red';
    food.style.borderRadius = '50%';
    food.style.gridRowStart = foodPosition.y; 
    food.style.gridColumnStart = foodPosition.x;

    container.appendChild(food);
}


function moveSnake(key){
    snakeTailPosition = {
        x: snakeArray[ 0 ].x,
        y: snakeArray[ 0 ].y,
    };

    for(let i = snakeArray.length-1; i>-0; i--){
        snakeArray[i] = {...snakeArray[i-1]};
    }

    switch (key) {
        case "ArrowDown":
            snakeArray[0].y += 1;
            break;
        case "ArrowUp":
            snakeArray[0].y -= 1;
            break;
        case "ArrowLeft":
            snakeArray[0].x -= 1;
            break;
        case "ArrowRight":
            snakeArray[0].x += 1;
            break;
        default:
            snakeArray[0].x += 1;
            break;
    }

    if(snakeArray[0].x === foodPosition.x &&
        snakeArray[0].y === foodPosition.y){
        score += 1;
        collideWithFood();   
    }

}

function collideWithFood(){
    foodPosition ={
        x: Math.floor(Math.random() * 14)+4 ,
        y: Math.floor(Math.random() * 14)+4 
    };

    snakeArray.push(snakeTailPosition);
}       

function borderCollide(){
    if(snakeArray[0].x<1 || snakeArray[0].x >18 || snakeArray[0].y<1 || snakeArray[0].y >16){
        startGame = false;
        gameOverAudio.play();
        noticeStatus.style.display='unset';
        container.style.background='rgba(0, 0, 0, 0.527)';
        noticeStatus.innerHTML="Game Ended";

        return true;
    }
    else{
        return false;
    }
}

function selfCollide(){
    if(snakeArray.length >1){
        for (let index = 1; index < snakeArray.length; index++) {
            if(snakeArray[index].x === snakeArray[0].x && snakeArray[index].y === snakeArray[0].y){
                return true;
            }
            else{
                return false;
            }
            
        }
    }
    
}

function reset(){
    score = 0;
    runTime =0;
    foodTime =0;
    snakeDirection = "";
    snakeArray=[{x:1, y:2}];
    snakeTailPosition = {x:"", y: ""}
    noticeStatus.innerHTML="";
    noticeStatus.style.color ='white';
    container.style.background='rgba(255, 255, 255, 0)';
    foodPosition ={
        x: Math.floor(Math.random() * 14)+4 ,
        y: Math.floor(Math.random() * 14)+4 
    };

    requestAnimationFrame(main);
}

function gameStart(){
    reset();
    startGame = true;
}

function gameEnd(){
    startGame = false;
    noticeStatus.style.color ='black';
    noticeStatus.innerHTML="Game Stopped";
    requestAnimationFrame(main);
}

stopButton.addEventListener('click',()=>{startGame && gameEnd()} );
startButton.addEventListener('click',()=>{!startGame && gameStart()});
document.addEventListener('keydown',( {key} )=>{ snakeDirection = key });

window.requestAnimationFrame(main);

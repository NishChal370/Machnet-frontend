let gameOverAudio = new Audio('gameover.mp3');
const container = document.querySelector('.container');
const gameStatus = document.querySelector('.game__status');
const stopButton = document.querySelector('.stop__button');
const startButton = document.querySelector('.start__button');
const buttonContainer = document.querySelector('.button__container');

let moveScreen = 0.5;
let startGame = false;
let countTimeFrame = 0;
let enemyCreatingTime = 0;
let carPosition = {x:2, y:5};
let enemyCarsPosition = [ {x:2, y:0} ];

function main(){
    countTimeFrame ++;
    enemyCreatingTime ++;

    moveBackground();
    createCar();
    moveCar('');
    if(enemyCreatingTime > 100){
        let newEnemy = {
            x:  Math.floor(Math.random() * 3)+2 ,
            y: 0,
        };
        enemyCreatingTime =0;
        enemyCarsPosition.push(newEnemy);
    }

    createEnemyCar();
    if(countTimeFrame >= 20){
        moveEnemyCar();
        
        countTimeFrame =0;
    }

    if(!checkCollide() && startGame ){
        requestAnimationFrame(main);  
    }
}

function moveBackground(){
    moveScreen ++;
    container.style.backgroundPositionY = moveScreen+'px';
}

function createEnemyCar(){
    enemyCarsPosition.forEach((enemyCarPosition)=>{
        const enemyCar = document.createElement('div');
        enemyCar.style.width = '100%';
        enemyCar.setAttribute("class", "enemy__car");
        enemyCar.style.gridRowStart = enemyCarPosition.y;
        enemyCar.style.gridColumnStart = enemyCarPosition.x;

        container.append(enemyCar);
    });
}

function createCar(){
    container.innerHTML='';
    const car = document.createElement('div');
    car.style.width= '100%';
    car.style.marginLeft = '2px';
    car.style.marginRight = '2px';
    car.setAttribute("class", "own__car");
    car.style.gridRowStart = carPosition.y;
    car.style.gridColumnStart = carPosition.x;
    
    container.append(car);
}

function moveCar(key){
    if(key === 'ArrowRight' &&  carPosition.x <=4){
        carPosition.x +=1;
    }
    if(key === 'ArrowLeft' &&  carPosition.x >=3){
        carPosition.x -=1;
    }   
}

function moveEnemyCar(){
    enemyCarsPosition.forEach((enemyCarPosition)=>{
        enemyCarPosition.y ++;
    });

    removeEnemyCar();
}

function removeEnemyCar(){
    enemyCarsPosition.forEach((enemyCarPosition, index)=>{
        if(enemyCarPosition.y > 6){
            enemyCarsPosition.splice(index, 1);
        }
    })
}

function checkCollide(){
    for(let index=0; index < enemyCarsPosition.length; index++){
        if(enemyCarsPosition[index].x === carPosition.x && enemyCarsPosition[index].y === carPosition.y ){
            gameEnd();

            return true;
        }
    }
}

function reset(){
    countTimeFrame =0;
    enemyCreatingTime=0;
    carPosition = {x:2, y:5};
    enemyCarsPosition = [ {x:2, y:0} ];
}

function gameStart(){
    reset();
    startGame = true;
    requestAnimationFrame(main);
    buttonContainer.style.display ='none';
}

function gameEnd(){
    startGame = false;
    gameOverAudio.play();
    gameStatus.innerHTML='Game Over';
    gameStatus.style.display='unset';
    buttonContainer.style.display ='unset';
}

window.addEventListener('keydown',({key})=>moveCar(key));
startButton.addEventListener('click',()=>{!startGame && gameStart()});
window.requestAnimationFrame(main);
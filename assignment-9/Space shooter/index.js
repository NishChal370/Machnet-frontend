const body = document.querySelector('body');
const lifeBoard = document.querySelector('.life');
const scoreBoard = document.querySelector('.score');
const canvas = document.getElementById('canvas__frame');
const gameStatus = document.querySelector('.game__status');
const noticeBoard = document.querySelector('.notice__board');
const pausedNotice = document.querySelector('.paused__notice');
const startingNotice = document.querySelector('.main__notice');
const highestScoreBoard = document.querySelector('.highest__score');
const beginnerButton = document.querySelector('.beginner__button');
const difficultButton = document.querySelector('.difficult__button');
const intermediateButton = document.querySelector('.intermediate__button');

canvas.width = window.innerWidth-5;
canvas.height = window.innerHeight-50;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const context = canvas.getContext('2d');

const enemyImage ='./images/enemy2.png';
const bulletImage = './images/bullet.png';
const explodeImage = './images/explode.png'; 
const playerImage = './images/spaceship.png';

const audio={
    explosion : new Audio("audio/explosion.mp3"),
    shoot : new Audio("audio/shootBullet (2).wav"),
    enemyDestroyed : new Audio("audio/enemyDestroyed.wav"),
    playerDestroyed : new Audio("audio/playerDestroyed.wav"),
    enemyCrashedToBorder :new Audio("audio/shootBullet.wav"),
}

let enemys = [];
let bullets = [];
let player = {
    speed: 20,
    radius: 40 ,
    x: canvasWidth/2, 
    y: canvasHeight, 
    image : new Image(),
};

let score = 0;
const myStorage = window.localStorage;
let hightestScore = myStorage.getItem("highestScore");
highestScoreBoard.innerHTML = "Highest Score: "+hightestScore;

let counter = 0;
let playerLife = 3 ;
let moveScreen = 0.5;
let gameStart = false;
let bulletFired = false;
let enemyGenerateOn= 80;
let cancleAnimination = '';
let difficultLevel = 'beginner';
let playerInitialImage= playerImage;

function main(){
    counter ++;
    context.clearRect(0,0, canvasWidth, canvasHeight ); 
    drawPlayer();
    drawBullet();

    if(difficultLevel === 'beginner'){
        enemyGenerateOn = 80;
    }
    else if(difficultLevel === 'intermediate'){
        enemyGenerateOn = 60;
    }
    else if(difficultLevel === 'difficult'){
        enemyGenerateOn = 40;
    }
    if(counter > Math.floor( Math.random() * 100 ) + enemyGenerateOn){   
        generateNewEnemy();
        counter = 0;
    }

    drawEnemy();
    moveBackground();
    scoreBoard.innerHTML = 'Score: ' + score;
    lifeBoard.innerHTML = 'Life: ' + playerLife;
    (gameStart) && ( cancleAnimination = requestAnimationFrame(main) );
}

function moveBackground(){
    moveScreen ++;
    body.style.backgroundPositionY = moveScreen+'px';
}

function drawPlayer(){
    player.image.src = playerInitialImage;
    context.drawImage(
        player.image, 
        player.x-(player.radius),
        player.y-(player.radius*2),
        player.radius*2,
        player.radius*2
    );
}

function movePlayer(key){
    if(key === 'ArrowLeft' && player.x > player.radius){
        player.x -= player.speed;
    }
    else if(key === 'ArrowRight' && player.x < canvasWidth-player.radius){
        player.x += player.speed;
    }
}

function shootBullet(){
    let newBullet = {
        x: player.x,
        y: player.y-(player.radius),
        speed: 10,
        image: new Image(),
        radius: player.radius/3,
    };
    audio.shoot.play();
    bullets.push(newBullet); 
}

function drawBullet(){
    bullets.forEach((bullet)=>{
        bullet.image.src = bulletImage;
        context.drawImage(
            bullet.image,
            bullet.x-(bullet.radius), 
            bullet.y-(bullet.radius), 
            bullet.radius*2, 
            bullet.radius*2
        );
    });

    moveBullet();
}

function moveBullet(){
    for(let bulletIndex = 0; bulletIndex< bullets.length; bulletIndex++ ){
        bullets[bulletIndex].y -= bullets[bulletIndex].speed;     
    };

    checkBulletEnemyCollision();
}

function checkBulletEnemyCollision(){
    for(let enemyIndex = 0; enemyIndex  < enemys.length; enemyIndex++){
        
        for(let bulletIndex = 0; bulletIndex< bullets.length; bulletIndex++ ){

            if( bullets[bulletIndex].x !== undefined && enemys[enemyIndex] !== undefined){
                let dx = bullets[bulletIndex].x - enemys[enemyIndex].x;
                let dy = bullets[bulletIndex].y - enemys[enemyIndex].y;
                let enemyBulletDistance = Math.sqrt((dx*dx) + (dy*dy));
  
                if(enemyBulletDistance <= enemys[enemyIndex].radius || enemyBulletDistance <= bullets[bulletIndex].radius){
                    score ++;
                    audio.enemyDestroyed.play();
                    destroyEnemy(enemyIndex);
                    destroyBullet(bulletIndex)
                }
            }
        }
    }   
}

function destroyBullet(index){
    bullets.splice(index,1);
}

function generateNewEnemy(){
    let newEnemy = {
        x: Math.floor( Math.random() * (canvasWidth-40) ) + 40,
        y: 30,
        speed: 3,
        radius: 40,
        image: new Image(),
    }

    enemys.push(newEnemy);
}

function drawEnemy(){
    enemys.forEach((enemy)=>{
        enemy.image.src = enemyImage;
        context.drawImage(
            enemy.image,
            enemy.x-(enemy.radius),
            enemy.y-(enemy.radius),
            enemy.radius*2,
            enemy.radius*2
        );
    });

    moveEnemy(); 
}

function moveEnemy(){
    enemys.forEach((enemy,index)=>{
        (enemy.y < canvasHeight-enemy.radius)
            ? enemy.y += enemy.speed
            : destroyEnemy(index);
    });

    checkPlayerEnemyCollision();
    checkIfEnemyCrossesBorder();
}

function checkPlayerEnemyCollision(){
    for(let enemyIndex = 0; enemyIndex  < enemys.length; enemyIndex++){
        let dx = enemys[enemyIndex].x - player.x;
        let dy = enemys[enemyIndex].y - player.y;
        let playerEnemyDistance = Math.sqrt((dx*dx) + (dy*dy));

        if(playerEnemyDistance < enemys[enemyIndex].radius*2 || playerEnemyDistance < player.radius*2){
            gameOver();
        }
    }
}

function checkIfEnemyCrossesBorder(){
    for(let enemyIndex = 0; enemyIndex  < enemys.length; enemyIndex++){
        if( (enemys[enemyIndex].y + enemys[enemyIndex].radius) >= canvasHeight){
            playerLife --;
            audio.enemyCrashedToBorder.play();
            (playerLife <= -1) && reset();
        }
    }
}

function destroyEnemy(index){
    enemys.splice(index,1);
}

function reset(){
    setHighestScore();

    player = {
        speed: 20,
        radius: 40 ,
        x: canvasWidth/2, 
        y: canvasHeight, 
        image: new Image(),
    };

    score = 0;
    hightestScore = myStorage.getItem("highestScore");
    counter = 0;
    enemys = [];
    bullets = [];
    playerLife = 3;
    moveScreen = 0.5;
    gameStart = false;
    bulletFired = false;
    difficultLevel = 'beginner';
    noticeBoard.style.display ='unset';
    pausedNotice.style.display = 'none';
    startingNotice.style.display ='unset';

    requestAnimationFrame(main);
}

function startGame(){
    gameStart = true;
    playerInitialImage = playerImage;
    noticeBoard.style.display ='none';

    requestAnimationFrame(main);
}

function pauseGame(){
    gameStart = false;
    noticeBoard.style.display ='unset';
    pausedNotice.style.display = 'unset';
    startingNotice.style.display ='none';
    
    cancelAnimationFrame(cancleAnimination);
}

function gameOver(){
    playerInitialImage = explodeImage;
    drawPlayer();

    enemys = [];
    gameStart = false;
    audio.explosion.play();
    gameStatus.innerHTML ='Game over';
    noticeBoard.style.display ='unset';
    pausedNotice.style.display = 'none';
    startingNotice.style.display ='unset';

    requestAnimationFrame(main);
}

function setHighestScore(){
    if(score> hightestScore){
        hightestScore = score;
        myStorage.setItem("highestScore", hightestScore)
    }

    highestScoreBoard.innerHTML = "Highest Score: "+ hightestScore ;
}

window.addEventListener('keydown',({key})=>{
    if(key === 'ArrowLeft' || key === 'ArrowRight'){
        movePlayer(key);
    }
    if(key === 'ArrowUp'){
        bulletFired = true;
        shootBullet();
    }

    if( key === 'Enter'){
        playerInitialImage = playerImage;
        drawPlayer();
        gameStatus.innerHTML ='';
        (gameStart)
            ? pauseGame()
            : startGame()
    }
    else if (key === ' '){
        reset();        
    }
});

beginnerButton.addEventListener('click',()=>{
    difficultLevel = 'beginner';
    startGame();
} );

difficultButton.addEventListener('click',()=>{
    difficultLevel = 'difficult';
    startGame();

});

intermediateButton.addEventListener('click',()=>{
    difficultLevel = 'intermediate';
    startGame();
});


window.requestAnimationFrame(main);
const doorimg1 = document.getElementById('door1');
const doorimg2 = document.getElementById('door2');
const doorimg3 = document.getElementById('door3');

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath =  'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath =  'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

const startButton = document.getElementById('start');

let openDoor1,
    openDoor2,
    openDoor3;
let numClosedDoors = 3;

//checa se uma  porta foi clicada
const isClicked = (door)=>{
    if(door.src = closedDoorPath){
        return false;
    }else{
        return true;
    }
}
//diminui a contagem de portas abertas e verifica se portas abertas === 0 e o jogador ganhou
const playDoor = () =>{
    numClosedDoors--;

    if(numClosedDoors === 0){
        gameOver('win');
    }else{  
        gameOver('lose');
    }
}

const randomChoreDoorGenerator = ()=>{
    let choreDoor = Math.floor(Math.random() *numClosedDoors);

    if(choreDoor===0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else if(choreDoor===1){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }else if(choreDoor===2){
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
    }
}

doorimg1.onclick=()=>{
    if(!isClicked(doorimg1)){
        doorimg1.src = openDoor1;
        playDoor();
    }
}

doorimg2.onclick = () =>{
    if(!isClicked(doorimg2)){
        doorimg2.src=openDoor2;
        playDoor();
    }

}

doorimg3.onclick = () =>{
    if(!isClicked(doorimg3)){
        doorimg3.src= openDoor3;
        playDoor();
    }
}
const gameOver = (status)=>{
    if(status === 'win'){
        startButton.innerHTML = 'Você ganhou! jogar de novo?';
    }
}

randomChoreDoorGenerator();
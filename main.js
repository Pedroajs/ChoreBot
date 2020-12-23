const doorimg1 = document.getElementById('door1');
const doorimg2 = document.getElementById('door2');
const doorimg3 = document.getElementById('door3');

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath =  'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath =  'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

const currentlyPlaying = true;

const startButton = document.getElementById('start');

let openDoor1,
    openDoor2,
    openDoor3;
let numClosedDoors = 3;

const isBot=(door)=>{
    if(door.src === botDoorPath ){
        return true;
    }else{
        return false;
    }
}
//checa se uma porta foi clicada verificando o src da img
const isClicked = (door)=>{
    if(door.src === closedDoorPath){
        return false;
    }else{
        return true;
    }
}
//diminui a contagem de portas abertas e verifica se portas abertas === 0 e o jogador ganhou
const playDoor = (doorimg1, doorimg2, doorimg3) =>{
    numClosedDoors--;

    if(numClosedDoors === 0){
        gameOver('win');
    } else if(isBot(door)){
        gameOver();
    } else {  
        gameOver();
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
        playDoor(doorimg1);
    }
    
    if(currentlyPlaying&& !isClicked(door)){
        
    }
}

doorimg2.onclick = () =>{
    if(!isClicked(doorimg2)){
        doorimg2.src=openDoor2;
        playDoor(doorimg2);
    } 
    if(currentlyPlaying&& !isClicked(door)){
        
    }

}

doorimg3.onclick = () =>{
    if(!isClicked(doorimg3)){
        doorimg3.src= openDoor3;
        playDoor(doorimg3);
    }
    if(currentlyPlaying&& !isClicked(door)){
        
    }
}
const gameOver = (status)=>{
    if(status === 'win'){
        startButton.innerHTML = 'Você ganhou! jogar de novo?';
    }else{
        startButton.innerHTML  = 'Você perdeu! Tente novamente!'
    }


    currentlyPlaying=false;
}

randomChoreDoorGenerator();
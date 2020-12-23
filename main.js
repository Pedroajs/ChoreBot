const doorimg1 = document.getElementById('door1');
const doorimg2 = document.getElementById('door2');
const doorimg3 = document.getElementById('door3');

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath =  'https://content.codecademy.com/projects/chore-door/images/space.svg';

let openDoor1,
    openDoor2,
    openDoor3;

let numClosedDoors = 3;
const randomChoreDoorGenerator = ()=>{
    let choreDoor = Math.floor(Math.random() *numClosedDoors);

    if(choreDoor===0){

    }else if(choreDoor===1){

    }else if(choreDoor===2){
        
    }
}

doorimg1.onclick=()=>{
    doorimg1.src = botDoorPath;
}

doorimg2.onclick = () =>{
    doorimg2.src=beachDoorPath;

}

doorimg3.onclick = () =>{
    doorimg3.src= spaceDoorPath;
}
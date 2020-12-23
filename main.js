const doorimg1 = document.getElementById('door1');
const doorimg2 = document.getElementById('door2');
const doorimg3 = document.getElementById('door3');

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath =  'https://content.codecademy.com/projects/chore-door/images/space.svg';
doorimg1.onclick=()=>{
    doorimg1.src = botDoorPath;
    console.log('fui clicado porta1')
}

doorimg2.onclick = () =>{
    doorimg2.src=beachDoorPath;
    console.log('fui clicado porta2')

}

doorimg3.onclick = () =>{
    doorimg3.src= spaceDoorPath;
    console.log('fui clicado port3')

}
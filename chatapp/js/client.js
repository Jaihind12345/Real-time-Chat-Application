const socket = io(`http://localhost:8000`);
const form= document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messagContainer=document.querySelector(".container");

const name=prompt("Enter your name to join");
socket.emit('new-user-joind',name);
//socket.on('user-joined',data=>{
  //  append(`${name} joined the chat`,'right');
//});
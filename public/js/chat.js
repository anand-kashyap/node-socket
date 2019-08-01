const socket = io();

socket.on('countUpdated', (count) => {
  console.log('count');
  document.getElementById('count').innerHTML = count;
});
socket.on('newClient', () => {
  console.log('count');
  document.getElementById('chat-box').innerHTML += 'Welcome!';
});

document.getElementById('increment').addEventListener('click', () => {
  socket.emit('increment');
});
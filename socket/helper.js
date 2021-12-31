const { Observable } = require('rxjs');
const { filter } = require('rxjs/operators');

const socEvt$ = (socket, eventName) => {
  return new Observable((observ) => {
    const cb = (msg, prod) => {
      observ.next(msg, prod)
    }
    socket.on(eventName, cb);
    return () => socket.removeListener(eventName, cb);
  })
};
const sockUEvent$ = (socket, eventName) => {
  // console.log('user', socket.user);
  return socEvt$(socket, eventName).pipe(
    filter(() => socket.user)
  );
}

module.exports = { socEvt$, sockUEvent$ }
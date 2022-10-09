field.onclick = function (event) {

  let fieldCoords = field.getBoundingClientRect();

  let ballCoordsTop = event.clientY - field.clientTop - fieldCoords.top - ball.clientHeight / 2;
  let ballCoordsLeft = event.clientX - field.clientLeft - fieldCoords.left - ball.clientWidth / 2;

  ball.style.top = ballCoordsTop + 'px';
  ball.style.left = ballCoordsLeft + 'px';
}
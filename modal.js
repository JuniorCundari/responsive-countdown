let modal = document.getElementById('modal')
let signUpButton = document.getElementById('signUpButton')
let span = document.getElementsByClassName('close-modal')[0]

signUpButton.onclick = function open() {
  modal.style.display = 'block'
}

span.onclick = function close() {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

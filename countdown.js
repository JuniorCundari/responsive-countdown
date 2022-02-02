var future = new Date('Feb 09, 2022 23:59:59').getTime()

var countdownTimer = setInterval(() => {
  let now = new Date().getTime()
  let countdown = future - now

  let days = Math.floor(countdown / (1000 * 60 * 60 * 24))
  let hours = Math.floor((countdown / (1000 * 60 * 60)) % 24)
  let minutes = Math.floor((countdown / (1000 * 60)) % 60)
  let seconds = Math.floor((countdown / 1000) % 60)

  document.getElementById('days').innerHTML = formatDay(days) + ' :'
  document.getElementById('hours').innerHTML = formatDigit(hours) + ' :'
  document.getElementById('minutes').innerHTML = formatDigit(minutes) + ' :'
  document.getElementById('seconds').innerHTML = formatDigit(seconds)

  if (countdown < 0) {
    clearInterval(countdownTimer)
    document.getElementById('countdown-container').innerHTML = 'Expirado'
    document.getElementById('countdown-container').style.fontSize = '4rem'
    document.getElementById('countdown-container').style.color = 'var(--black)'
  }
}, 1000)

const formatDigit = digit => `0${digit}`.slice(-2)
const formatDay = digit => {
  if (digit >= 100) {
    return `0${digit}`.slice(-3)
  } else {
    return `0${digit}`.slice(-2)
  }
}

let counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const pauseButton = document.getElementById('pause')
const heartButton = document.getElementById('heart')
const submitButton = document.getElementById('submit')

let seconds = 0;

function counterHolder() {
  return setInterval(() => {
  seconds += 1;
  counter.innerHTML = seconds;
}, 1000);}

let counterFunction = counterHolder()

minusButton.addEventListener('click', () => {
  seconds -= 1;
  counter.innerHTML = seconds;
})

plusButton.addEventListener('click', () => {
  seconds += 1;
  counter.innerHTML = seconds;
})

pauseButton.addEventListener('click', () => {
  if(pauseButton.textContent.includes('pause')) {
    clearInterval(counterFunction)
      pauseButton.textContent = 'resume'
      minusButton.disabled = true, plusButton.disabled = true, heartButton.disabled = true, submitButton.disabled = true
  } else {
    counterFunction = counterHolder();
    pauseButton.textContent = 'pause'
    minusButton.disabled = false, plusButton.disabled = false, heartButton.disabled = false, submitButton.disabled = false
  }
})

heartButton.addEventListener('click', () => {
  
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  let p = document.createElement('p')
  const commentList = document.getElementById('list').appendChild(p)
  let commentInput = document.getElementById('comment-input').value
  p.append(commentInput)
  document.getElementById('comment-form').reset()
})


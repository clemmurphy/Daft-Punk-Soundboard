function init() {
  // add an event listener to all button divs
  // eslint-disable-next-line no-unused-vars
  const buttons = document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', onClick)
  })

  // sync all animations and transitions together
  const animationTime = 300

  // play sound of the audio within the div and 
  function onClick(event) {
    event.target.lastChild.play()
    event.target.classList.add('clicked')
    showHead(nextHead)
    backgroundColor()
    setTimeout(() => event.target.classList.remove('clicked'), animationTime)
  }

  // setting up the appearing heads thing
  let nextHead = 0

  // show and hide the heads and alternate
  function showHead(head) {
    if (head === 0) {
      document.querySelector('.left-head').style.display = 'flex'
      nextHead = 1
      setTimeout(() => document.querySelector('.left-head').style.display = 'none', animationTime)
    } else {
      document.querySelector('.right-head').style.display = 'flex'
      nextHead = 0
      setTimeout(() => document.querySelector('.right-head').style.display = 'none', animationTime)
    }
  }

  // flash the background color
  function backgroundColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    console.log(randomColor)
    document.body.style.backgroundColor = `#${randomColor}`
    setTimeout(() =>{
      document.body.classList.add('body-black')
      document.body.style.backgroundColor = 'black'
    }, animationTime)
    document.body.classList.remove('body-black')
  }

}

window.addEventListener('DOMContentLoaded', init)

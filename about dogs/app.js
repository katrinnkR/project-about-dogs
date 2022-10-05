const slides = document.querySelectorAll('.slide')
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const board = document.querySelector('#board')
const colors = ['#7d3b3b', '#ba8686', '#6e4127', '#c29b84', '#d99071', '#c47070', '#a3473b']
const SQUARES_NUMBER = 300


for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    }




item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend) 

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}


function dragstart (event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0 )
}

function dragend (event) {
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
}

function dragover (event) {
    event.preventDefault()
}

function dragenter (event) {
    event.target.classList.add('hovered')
    
}

function dragleave (event) {
    event.target.classList.remove('hovered')
}

function dragdrop (event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}




for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => 
  setColor (square))

  square.addEventListener('mouseleave', () => 
  removeColor (square))

  board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}
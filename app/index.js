import document from 'document'
import './widgets/text_rect'

const myTextRectEl = document.getElementById('myTextRect')
console.log(`app/index.js ${myTextRectEl.getElementById('text').text}`)
myTextRectEl.getElementById('text').textLength = 32
myTextRectEl.text = "My Cat's name is Faure"
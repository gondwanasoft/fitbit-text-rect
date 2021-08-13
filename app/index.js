import document from 'document'
//import './widgets/text_rect'                      // sufficient if using auto-construct
import { constructTextRect } from './widgets/text_rect'   // needed if not using auto-construct
import * as config from './widgets/text_rect/config';

console.log(`autoConstruct=${config.autoConstruct}`)

if (!config.autoConstruct) {
  // Construct widgets manually:
  constructTextRect(document.getElementById('myTextRect'))
  constructTextRect(document.getElementById('myTextRect2'))
}

const myTextRectEl = document.getElementById('myTextRect')
console.log(`app/index.js ${myTextRectEl.getElementById('text').text}`)
myTextRectEl.getElementById('text').textLength = 32
myTextRectEl.text = "A Volkswagen."
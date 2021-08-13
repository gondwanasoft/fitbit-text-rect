import document from 'document'
import './widgets/text_rect'    // sufficient if using auto-construct
import { construct } from './widgets/text_rect'
import * as config from './widgets/text_rect/config';

console.log(`autoConstruct=${config.autoConstruct}`)

if (!config.autoConstruct) {
  // construct widgets manually
  const el = document.getElementById('myTextRect')
  construct(el) // TODO 3.0 consider renaming 'construct' to something specific to widget type
  construct(document.getElementById('myTextRect2'))
}

const myTextRectEl = document.getElementById('myTextRect')
console.log(`app/index.js ${myTextRectEl.getElementById('text').text}`)
myTextRectEl.getElementById('text').textLength = 32
myTextRectEl.text = "A Volkswagen."
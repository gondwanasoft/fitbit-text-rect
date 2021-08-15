import document from 'document'
//import './widgets/text_rect'                            // needed if using auto-construct
import { constructTextRects } from './widgets/text_rect'  // needed if not using auto-construct
import * as config from './widgets/text_rect/config';     // you don't normally need to import or use this

if (!config.autoConstruct) {  // Construct widgets manually
  // Option 1: construct each widget individually:
  // constructTextRect(document.getElementById('myTextRect'))
  // constructTextRect(document.getElementById('myTextRect2'))

  // Option 2: construct all widgets within a parent:
  constructTextRects(document);
}

const myTextRectEl = document.getElementById('myTextRect')
console.log(`app/index.js ${myTextRectEl.getElementById('text').text}`)
myTextRectEl.getElementById('text').textLength = 32
myTextRectEl.text = "A Volkswagen."
myTextRectEl.style.display = 'inherit';
myTextRectEl.redraw();    // must call this after changing .style.display from 'none'
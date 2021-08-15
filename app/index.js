import document from 'document'
//import './widgets/text_rect'                      // sufficient if using auto-construct
import { constructTextRect } from './widgets/text_rect'   // needed if not using auto-construct
import { constructWidgets } from './widgets/text_rect/construct-widgets';   // needed if not using auto-construct and constructing all widgets within a parent
import * as config from './widgets/text_rect/config';

if (!config.autoConstruct) {  // Construct widgets manually
  // Construct each widget individually:
  // constructTextRect(document.getElementById('myTextRect'))
  // constructTextRect(document.getElementById('myTextRect2'))

  // Construct all widgets within a parent:
  constructWidgets('text-rect', constructTextRect, document);
}

const myTextRectEl = document.getElementById('myTextRect')
console.log(`app/index.js ${myTextRectEl.getElementById('text').text}`)
myTextRectEl.getElementById('text').textLength = 32
myTextRectEl.text = "A Volkswagen."
myTextRectEl.style.display = 'inherit';
myTextRectEl.redraw();    // must call this after changing .style.display from 'none'
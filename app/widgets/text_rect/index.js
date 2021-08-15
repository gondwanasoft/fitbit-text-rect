import * as config from './config';
import { constructWidgets } from './construct-widgets';

export const constructTextRect = el => {
  el.class = el.class;    // bring forward (ie, trigger) application of CSS styles

  const textEl = el.getElementById('text');
  const rectEl = el.getElementById('rect');
  // Because the following attributes are set only when the widget is constructed, they won't respond to subsequent changes.
  const offsetHoriz = rectEl.x ?? 0;
  const offsetVert = rectEl.y ?? 0;
  const paddingHoriz = rectEl.width ?? 5;
  const paddingVert = rectEl.height ?? 0;

  el.redraw = () => {
    // This function must be called when .style.display is changed from 'none'. This can be done directly or via some other API function.
    if (el.style.display === 'none') return;

    const bbox = textEl.getBBox();
    const anchorOffset = textEl.textAnchor==='start'? 0 : (textEl.textAnchor==='end'? bbox.width : bbox.width / 2);
    rectEl.x = offsetHoriz - paddingHoriz - anchorOffset;
    rectEl.width = bbox.width + offsetHoriz + 2 * paddingHoriz;
    rectEl.y = bbox.top - el.y + offsetVert - paddingVert;
    rectEl.height = bbox.height + offsetVert + 2 * paddingVert;
  }

  Object.defineProperty(el, 'text', {
    set: function(newValue) {
      textEl.text = newValue;
      el.redraw();
    }
  })

  el.redraw();
}

if (config.autoConstruct) constructWidgets('text-rect', constructTextRect);
import document from 'document';

export const constructWidgets = (widgetType, construct) => {
  // TODO 3 consider automatically constructing all widgets by default; don't do so if a particular flag is set
  // TODO 3 it's inefficient to search all of document; could there be a better way? manually-callable function to construct, that takes an arg? className in elements that contain widgets?
  const widgets = document.getElementsByTypeName(widgetType);
  widgets.forEach(widget => {
    const classes = widget.class.split(' ');  // array of all class names
    if (classes.indexOf('widget-auto') >= 0) {
      widget.class = widget.class;    // bring forward (ie, trigger) application of CSS styles
      construct(widget);
      // TODO 3 distinguish between 'construct' (add members to el) and 'draw' (lay out visible elements)
    }
  });
}
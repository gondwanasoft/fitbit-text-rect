import document from 'document';

export const constructWidgets = (widgetType, construct) => {
  // widgetType: string name: value of SVG element 'type' attribute' declared in widget <symbol>
  // TODO 3.0 may not need 'construct' arg: all widgets must provide it.
  const widgets = document.getElementsByTypeName(widgetType);
  widgets.forEach(widget => {
    if (widget.id !== widget.type) {    // needed because old firmware will find the <use> AND the <symbol> for each widget instance
      const classes = widget.class.split(' ');  // array of all class names
      if (classes.indexOf('widget-auto') >= 0) {
        widget.class = widget.class;    // bring forward (ie, trigger) application of CSS styles
        construct(widget);
        // TODO 3.5 distinguish between 'construct' (add members to el) and 'draw' (lay out visible elements)
      }
    }
  });
}
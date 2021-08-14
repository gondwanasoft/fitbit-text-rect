import document from 'document';

export const constructWidgets = (widgetType, construct, parent = document) => {
  // widgetType: string name: value of SVG element 'type' attribute' declared in widget <symbol>.
  // construct: function to be called to convert a GraphicsElement to a widget of the relevant type.
  // parent: ElementSearch to be searched for widgetType.
  const widgets = parent.getElementsByTypeName(widgetType);
  widgets.forEach(widget => {
    if (widget.id !== widget.type)     // needed because old firmware will find the <use> AND the <symbol> for each widget instance
      construct(widget);
      // TODO 3.5 distinguish between 'construct' (add members to el) and 'draw' (lay out visible elements); need 'autoDraw' in config.js?
  });
}
// The contents of this module could be included in a widget's index.js.
// However, this would make it harder to extract the contents if an independent solution is sought in future
// (ie, not requiring duplication of this content for each widget type).

import document from 'document';

export const constructWidgets = (widgetType, construct, parent = document) => {
  // widgetType: string name: value of SVG element 'type' attribute' declared in widget <symbol>.
  // construct: function to be called to convert a GraphicsElement to a widget of the relevant type.
  // parent: ElementSearch to be searched for widgetType.
  const widgets = parent.getElementsByTypeName(widgetType);
  widgets.forEach(widget => {
    if (widget.id !== widget.type)     // needed because old firmware will find the <use> AND the <symbol> for each widget instance
      construct(widget);
  });
}

export const getConfig = el => {
  // Returns an object containing attribute:value pairs.
  const configEl = el.getElementById('config');
  if (!configEl) return {};

  const config = {};
  const attributes = configEl.text.split(';');
  //console.log(`getConfig() config="${attributes}"`)
  attributes.forEach(attribute => {
    const colonIndex = attribute.indexOf(':');
    const attributeName = attribute.substring(0, colonIndex).trim();
    if (attributeName) {
      const attributeValue = attribute.substring(colonIndex+1).trim();
      //console.log(`getConfig() found entry "${attributeName}"="${attributeValue}"`)
      config[attributeName] = attributeValue;
    }
  })
  //console.log(`getConfig() config=${JSON.stringify(config)} (${Object.keys(config).length} entries)`);
  return config;
}
// TODO 3.3 rename this file? widget-util?
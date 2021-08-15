# fitbit-text-rect
A simplistic widget for Fitbit OS that displays text in a rectangle. The rectangle automatically resizes to fit the text, which can be changed at run-time.

![examples](screenshot.jpg#center)

Construction
-
Widgets need to be constructed before they can be used and display correctly. There are three ways to do this:

* Set `auto-construct` to `true` in `config.js`
* Call `constructTextRect()` to construct a specific text-rect
* Call `constructTextRects()` to construct all text-rects within a specific element

Using `auto-construct` is easiest, since no additional and non-standard coding is required. The only disadvantage of using `auto-construct` is that it searches the whole of `document` for text-rects. This can be quite slow if your `document` is large, in which case one of the manual construction approaches should be used.

Redraw
-
A widget will be automatically redrawn if its `.style.display` is not `none`. This applies when the widget is first constructed and also whenever a relevant attribute is changed (*eg*, `text`).

For simple widgets, redrawing is not a problem. However, if your app has many complex widgets, and some of them are not always visible, unnecessary redrawing could impact on performance. To avoid this, set `.style.display` to `none`. When you need the widget to be visible, change `.style.display` to `inline` or `inherit`. Unfortunately, such a change won't trigger an immediate redraw; you must do this manually. You can do this by calling `redraw()` or by updating a widget attribute that results in a redraw.

Caveats
-
This is largely untested. The widget is probably lacking default attributes and may not respond to CSS.

Pull requests are welcome!
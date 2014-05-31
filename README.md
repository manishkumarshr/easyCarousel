easyCarousel
============

A simple jQuery carousel. A jQuery image slider plugin, you can use anywhere in your website. Easy to configure with simple settings.

easyCarousel running Demo
============

*[DEMO](http://www.findnetspeed.com/demo.html)*

Usage
=====

easyCarousel is easy to use. Just include the <code>easyCarousel.js</code> file in your `<script>` tag and use the simple syntax.

`<script type="text/javascript" src="easyCarousel.js"></script>`

Initiate the plugin simple as this:

```javascript
<script type="text/javascript">
    $(document).ready(function() {
        $("#myUlElement").easyCarousel({
            height: 300,        // height of the scrolling area
            width: 650,         // width of scrolling area
            autoScroll: false,  // do you want to start the scrolling by itself
            photoFrame: true    // add a frame to your photos used in slider
        });
    });
</script>
```

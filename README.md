easyCarousel
============

A simple jQuery carousel. A jQuery image slider plugin, you can use anywhere in your website. Easy to configure with simple settings.

easyCarousel running Demo
============

*[DEMO](http://www.findnetspeed.com/demo.html)*

Dependencies
============

*jQuery*

Usage
=====

easyCarousel is easy to use. Just include the <code>easyCarousel.js</code> file in your `<script>` tag and use the simple syntax.

`<script type="text/javascript" src="easyCarousel.js"></script>`

Initiate the plugin simple as this:

```javascript
$(document).ready(function() {
    $("#myUlElement").easyCarousel({
        height: 300,        // height of the scrolling area, default is 250px
        width: 650,         // width of scrolling area, default is 600px
        autoScroll: true,   // do you want to start the scrolling by itself, default is true
        photoFrame: true    // add a frame to your photos used in slider, default is true
    });
});
```

HTML code structure
===================

You need to use `<ul>` and `<li>` format in order to use the image slider carousel.

```html
<ul id="myUlElement">
    <li><img src="images/pic1.jpg"></li>
    <li><img src="images/pic2.jpg"></li>
    <li><img src="images/pic3.jpg"></li>
    <li><img src="images/pic4.jpg"></li>
    <li><img src="images/pic5.jpg"></li>
    <li><img src="images/pic6.jpg"></li>
</ul>
```

Complete Code Example
=====================

Here is a complete code example to use easyCarousel.
```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Easy Carousel</title>
    <script type="text/javascript" src="jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="easyCarousel.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#myC").easyCarousel({
                height: 300,
                width: 650,
                autoScroll: true,
                photoFrame: true
            });
        });
    </script>
</head>
<body>
    <ul id="myC">
        <li><img src="images/pic1.jpg"></li>
        <li><img src="images/pic2.jpg"></li>
        <li><img src="images/pic3.jpg"></li>
        <li><img src="images/pic4.jpg"></li>
        <li><img src="images/pic5.jpg"></li>
        <li><img src="images/pic6.jpg"></li>
    </ul>
</body>
</html>
```




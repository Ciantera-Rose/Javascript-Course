//Comparison of Chrome's Command Line API vs Vanilla JavaScript
//Cmd line api is a wrapper that allows you to manipulate portions of an HTML page 

// Source page: http://www.dailysmarty.com/
// Console with Command Line API / Firebug
$('.image-item')
$('.image-item').first // returns function
$('.image-item').first()
$('.image-item').first().hide()

// Compared with
document.getElementsByClassName('post-item-wrapper')[0].style.display = 'none';

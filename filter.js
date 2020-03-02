var images = document.getElementsByTagName('img');
var atags = document.body.getElementsByTagName('a');
for (var i = 0, l = atags.length; i < l; i++) {
  atags[i].removeAttribute('target');
}

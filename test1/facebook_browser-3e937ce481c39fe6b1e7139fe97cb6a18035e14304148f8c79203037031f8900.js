function isFacebookApp(){var e=navigator.userAgent||navigator.vendor||window.opera;return-1<e.indexOf("FBAN")||-1<e.indexOf("FBAV")}if(isFacebookApp())for(var links=document.querySelectorAll('a[target="_blank"]'),i=0;i<links.length;i++)links[i].removeAttribute("target");
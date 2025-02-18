var i = 0;
var path = new Array();
path[0] = "web.jpg";
path[1] = "banner.jpg";
path[2] = "banner2.jpg";

function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1)
    {  i++;} else{ i = 0;}
   setTimeout("swapImage()",1000);
}
window.onload=swapImage;
(function(doc, win){  
 doc.oncontextmenu=function(e){e.preventDefault();}; 
 var docE1 = doc.documentElement,  
 resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  
 recalc = function(){  
 var clientWidth = docE1.clientWidth;  
 if(!clientWidth) return;  
 if(clientWidth>=750){ 
 docE1.style.fontSize = 80 + 'px';  
 }else{ 
 docE1.style.fontSize = 40*(clientWidth/750) + 'px';  
 } 
 };  
 if (!doc.addEventListener) return;  
 win.addEventListener(resizeEvt,recalc,false);  
 doc.addEventListener('DOMContentLoaded',recalc,false);  
 })(document,window); 
 
//量出来的宽度除以40
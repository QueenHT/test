var s1=document.getElementById("s1");
var m1=document.getElementById("m1");
var d3=document.getElementById("d3");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var csb=document.getElementById("csb");
var cst=document.getElementById("cst");
var img1=document.getElementById("img1");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");
var ww1=document.getElementById("ww1");
var ww3=document.getElementById("ww3");
var ww4=document.getElementById("ww4");
s1.onclick=function(){
  m1.style.display="none";
}
s2.onclick=function(){
  d3.style.display="inline";
}
csb.onclick=function(){
  if(cst.value==""){
      s3.innerHTML="您还没有填写省份!"
  }else{
  s2.innerHTML="所在省份:"+cst.value;
  d3.style.display="none";
}
}
function stn(){
  ww1.innerHTML="个人中心";
}
function stm(){
  ww1.innerHTML="";
}
function sta(){
  ww3.innerHTML="用户反馈";
}
function stb(){
  ww3.innerHTML="";
}
function stc(){
  ww4.innerHTML="星级评定";
}
function ste(){
  ww4.innerHTML="";
}
var ad=document.getElementById("ad");
var lis=ad.getElementsByTagName("li")
var span=ad.getElementsByTagName("span");
var i=0;
var len=lis.length;
var timer=setInterval(task,2000);
function task(){
  if(i<len-1){
    lis[i].className="";
    span[i].className="";
    i++;
    lis[i].className="cur";
    span[i].className="cur";
  }else{
    lis[i].className="";
    span[i].className="";
    i=0;
    lis[i].className="cur";
    span[i].className="cur";
}
}
ad.onmouseover=function(){
    clearInterval(timer);
}
ad.onmouseout=function(){
 timer=setInterval(task,2000);
}
for(var n=0;n<len;n++){
  span[n].onmouseover=function(){

for(var c=0;c<len;c++){
  if(this==span[c]){
    if(i!=c){
      lis[i].className="";
        span[i].className="";
        i=c;
        lis[i].className="cur";
        span[i].className="cur";
    }
    break;
  }
}
}
}
var mv=document.getElementById("mv");
mv.onclick=function(){
  if(mv.paused){
    mv.play();
  }else{
    mv.pause();
  }
}
var hh2=document.getElementById("hh2");
var span1=hh2.getElementsByTagName("span");
task();
var time=setInterval(task1,1000);
function task1(){
  var now=new Date();
  var end=new Date("2099/1/19 24:00:00");
  var s=parseInt((end-now)/1000);
  if(s>0){
  var d=parseInt(s/(3600*24));
  var h=parseInt(s%(3600*24)/3600);
  var m=parseInt((s%3600)/60);
  var s=s%60;
  span1[0].innerHTML=h<10?"0"+h:h;
  span1[1].innerHTML=m<10?"0"+m:m;
  span1[2].innerHTML=s<10?"0"+s:s;

  }

}

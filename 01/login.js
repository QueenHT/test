var d1=document.getElementById("d1");
var timer=setTimeout(task,3000);
function task(){
   d1.style.bottom="0px";
}
var span=d1.children[0];
span.onclick=function(){
     d1.style.bottom="-200px";//单击X时关闭窗口
     setTimeout(task,3000);//再弹出窗口
}
var che=document.getElementById("che1");
var qw1=document.getElementById("qw1");
che.onclick=function(){
  if(che.checked){
    qw1.innerHTML="请勿在公共电脑上启用";
  }else{
    qw1.innerHTML="";
  }
}
  var fr=document.getElementById("fr");
    var btn=document.getElementById("btn");
btn.onclick=function(){
  var username=document.getElementById("username").value;
  var pwd=document.getElementById("pwd").value;
  var t1=document.getElementById("ts1");
  if(username==""||pwd==""){
    t1.innerHTML="用户名与密码不能为空"
  }else if(!localStorage.getItem(username)){
    t1.innerHTML="该用户名未注册请先注册";
  }else if(localStorage.getItem(username)===pwd){
    t1.innerHTML="";
        fr.submit();
    }else{
    t1.innerHTML="用户名与密码不一致";
  }
}

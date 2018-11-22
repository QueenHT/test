var code=Math.floor(Math.random()*9000)+1000;
var ss3=document.getElementById("ss3");
var fr=document.getElementById("fr");
var user=document.getElementById("username");
var pwd1=document.getElementById("pwd1");
var pwd2=document.getElementById("pwd2");
var email=document.getElementById("email");
var inp=document.getElementById("inp");
var btn=document.getElementById("btn");
var yz=document.getElementById("yz");
var s1=document.getElementById("s1");
var ss1=document.getElementById("ss1");
var s2=document.getElementById("s2");
var ss2=document.getElementById("ss2");
var s3=document.getElementById("s3");
var sss3=document.getElementById("sss3");
var s5=document.getElementById("s5");
var ss5=document.getElementById("ss5");
var s6=document.getElementById("s6");
var ss6=document.getElementById("ss6");
var p1=document.getElementById("p1");
var userReg=/^[0-9a-zA-Z_]{4,8}$/;
var pwdReg=/^\w{6,12}$/;
window.onload=function(){
  ss3.innerHTML=code;
}
user.onfocus=function(){
this.style.border="1px solid red";
this.placeholder="";
s1.innerHTML="用户名";
ss1.innerHTML="4-8位由字母数字下划线组成";
ss1.style.background="#FFEE99"
}
user.onblur=function(){
  if(userReg.test(this.value)){
  this.style.border="1px solid black";
  ss1.innerHTML="<img src='../image/dh4.png' height='30px' width='30px'>";
  ss1.style.background="";
}else{
  this.style.border="1px solid red";
  ss1.innerHTML="用户名格式不正确";
  ss1.style.background="#ccc";
}
}
email.onfocus=function(){
this.style.border="1px solid red";
this.placeholder="";
s2.innerHTML="邮箱";
ss2.innerHTML="输入正确的邮箱，如123@.com";
ss2.style.background="#FFEE99"
}
 var email1=email.validity;
email.onblur=function(){
  if(email1.typeMismatch||email.value==""){
    this.style.border="1px solid red";
    ss2.innerHTML="邮箱格式不正确";
    ss2.style.background="#ccc";

}else{
  this.style.border="1px solid black";
  ss2.innerHTML="<img src='../image/dh4.png' height='30px' width='30px'>";
  ss2.style.background="";
}
}
yz.onfocus=function(){
this.style.border="1px solid red";
this.placeholder="";
s3.innerHTML="验证码";
}
yz.onblur=function(){
  if(yz.value==code){
    this.style.border="1px solid black";
    sss3.innerHTML="<img src='../image/dh4.png' height='30px' width='30px'>";
    sss3.style.background="";
  }else{
    this.style.border="1px solid red";
    sss3.innerHTML="验证码不正确";
    sss3.style.background="#ccc";
  }
}
pwd1.onfocus=function(){
this.style.border="1px solid red";
this.placeholder="";
s5.innerHTML="设置密码";
ss5.innerHTML="6-12位数字字母组成";
ss5.style.background="#FFEE99";
}
pwd1.onblur=function(){
  if(pwdReg.test(this.value)){
  this.style.border="1px solid black";
  ss5.innerHTML="<img src='../image/dh4.png' height='30px' width='30px'>";
  ss5.style.background="";
}else{
  this.style.border="1px solid red";
  ss5.innerHTML="密码格式不正确";
  ss5.style.background="#ccc";
}
}
pwd2.onfocus=function(){
this.style.border="1px solid red";
this.placeholder="";
s6.innerHTML="确认密码";
ss6.innerHTML="请再次输入密码";
ss6.style.background="#FFEE99";
}
pwd2.onblur=function(){
  if(pwd2.value==""){
    this.style.border="1px solid red";
    ss6.innerHTML="密码不能为空";
    ss6.style.background="#ccc";
}else if(pwd1.value==pwd2.value){
this.style.border="1px solid black";
ss6.innerHTML="<img src='../image/dh4.png' height='30px' width='30px'>";
ss6.style.background="";
}else{
  this.style.border="1px solid red";
  ss6.innerHTML="两次密码不一致";
  ss6.style.background="#ccc";
}
}
inp.onclick=function(){
           if(!inp.checked){
              btn.disabled=true;
              btn.style.color="#ccc";
           }else{
            btn.disabled=false;
            btn.style.color="#fff";
          }
}
btn.onclick=function(){
  var auser=user.value;
  var bpwd=pwd1.value;
  if(user.value==""||email.value==""||yz.value==""||pwd1.value==""||pwd2.value==""){
    p1.innerHTML="所有内容不能为空";
    p1.style.color="red";
    p1.style.fontSize="12px";
  }else if(ss1.innerHTML=="用户名格式不正确"||ss2.innerHTML=="邮箱格式不正确"||sss3.innerHTML=="验证码不正确"||
  ss5.innerHTML=="密码格式不正确"||ss6.innerHTML=="两次密码不一致"){
    p1.innerHTML="您还有资料没填写正确";
      p1.style.color="red";
      p1.style.fontSize="12px";
  }else if(localStorage.getItem(auser)){
    p1.innerHTML="该用户名已被注册";
      p1.style.color="red";
      p1.style.fontSize="12px";
  }else{

    localStorage.setItem(auser,bpwd);
    p1.innerHTML="";
    fr.submit();
  }
}

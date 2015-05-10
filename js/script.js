function logincheck(){
  if(document.getElementById("username").value!="" && document.getElementById("password").value != ""){
var xmlhttp;
var form = document.querySelector('form');
var data ='username='+document.getElementById("username").value+'&password='+document.getElementById("password").value;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      try{
        jobj=JSON.parse(xmlhttp.responseText);        
        if(jobj.status==false){
        document.getElementById("results").innerHTML=jobj.msg;
      }else if(jobj.status) {
document.getElementById("results").innerHTML=jobj.msg;
setTimeout(function(){window.location="admin.php";},2000);
      }
      }catch($e){}
    }
  }
xmlhttp.open("POST","login.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(data);
return false;
}
else{
  document.getElementById("results").innerHTML="Enter username and password"
  return false;
}
}

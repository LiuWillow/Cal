
function myFunction() {
    var acc = document.getElementById("account").value;
	var psr = document.getElementById("password").value;
    if(acc=="admin"&psr=="123456"){
	alert("登录成功！");
	window.open("cal.html");
	}else{
	alert("账号或密码错误！");
	}

}

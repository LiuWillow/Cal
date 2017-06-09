var pi=3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384;
//计算前方交会
function calfront(){
	var aa = document.getElementById("aa").value;
	var xa = document.getElementById("xa").value;
	var ya = document.getElementById("ya").value;
	var ab = document.getElementById("ab").value;
	var xb = document.getElementById("xb").value;
	var yb = document.getElementById("yb").value;
	var q = document.getElementById("q").value;
	var tempa=aa.split(' ');
	var arad=angletorad(tempa[0],tempa[1],tempa[2]);
	var tempb=ab.split(' ');
	var brad=angletorad(tempb[0],tempb[1],tempb[2]);
	var xp=calPx(arad,parseFloat(xa),parseFloat(ya),brad,parseFloat(xb),parseFloat(yb),parseFloat(q));
	var yp=calPy(arad,parseFloat(xa),parseFloat(ya),brad,parseFloat(xb),parseFloat(yb),parseFloat(q));
	if(aa==""||xa==""||ya==""||xb==""||yb==""||q==""){
		alert("请输入数据！");
	}else{
		document.getElementById("xp").value=xp.toFixed(10);
		document.getElementById("yp").value=yp.toFixed(10);
	}

}
//计算两点距离和角度
function caldisanda(){
	var x1 = document.getElementById("x1").value;
	var y1 = document.getElementById("y1").value;
	var x2 = document.getElementById("x2").value;
	var y2 = document.getElementById("y2").value;
	if(x1==""||x2==""||y1==""||y2==""){
		alert("请输入数据！");
	}else{
		var dis=caldis(parseFloat(x1),parseFloat(y1),parseFloat(x2),parseFloat(y2));
		document.getElementById("dis").value=dis.toFixed(10);
		var a=cala(parseFloat(x1),parseFloat(y1),parseFloat(x2),parseFloat(y2));
		document.getElementById("a").value=a;
	}
}
//计算距离交会
function calbydis(){
	var _xa = document.getElementById("_xa").value;
	var _xb = document.getElementById("_xb").value;
	var _ya = document.getElementById("_ya").value;
	var _yb = document.getElementById("_yb").value;
	var _a = document.getElementById("bp").value;
	var _b = document.getElementById("ap").value;
	if(_xa==""||_ya==""||_xb==""||_yb==""||_a==""||_b==""){
		alert("请输入数据！");
	}else{
	var xa=parseFloat(_xa);
	var xb=parseFloat(_xb);
	var ya=parseFloat(_ya);
	var yb=parseFloat(_yb);
	var a=parseFloat(_a);
	var b=parseFloat(_b);
	var c = caldis(xa,ya,xb,yb);
	var b1=(c*c+b*b-a*a)/(2*c);
	var a1=(c*c+a*a-b*b)/(2*c);
	var h=Math.sqrt(a*a-a1*a1);
		var xp=(a1*xa+b1*xb-h*(ya-yb))/(a1+b1);   //P点x坐标
	document.getElementById("_xp").value=xp;
	
	var yp=(a1*ya+b1*yb+h*(xa-xb))/(a1+b1);   //P点y坐标
	document.getElementById("_yp").value=yp;
	}
	
	
	
}
//角度转化为十进制
function angletoten(angle,min,sec){
	var result=parseFloat(angle)+(parseFloat(min))/60+(parseFloat(sec))/3600;
	return result;
}
//角度转化为弧度
function angletorad(angle,min,sec){
	var ten=angletoten(angle,min,sec);
	var result=ten*pi/180;
	return result;
}
//弧度转角度并以度分秒形式输出
function radtoangle(rad){
	var ten=180*rad/pi;
	var temp=ten;
	
	var angle=parseInt(temp); //要返回
	var xiaoshu=ten-angle;
	var min=parseInt(xiaoshu*60); //要返回
	var xiaoshu2=(xiaoshu*60)-min;
	var sec=xiaoshu2*60; //要返回
	var o=angle+" ";
	var p=min+" ";
	var q=sec.toFixed(2)+"";
	return o+p+q;
}
//清除front的数据
function clear1(){
	document.getElementById("aa").value="";
	document.getElementById("xa").value="";
	document.getElementById("ya").value="";
	document.getElementById("xb").value="";
	document.getElementById("yb").value="";
	document.getElementById("ab").value="";
	document.getElementById("q").value="";
	document.getElementById("xp").value="";
	document.getElementById("yp").value="";
}
//清除disanda的数据
function clear2(){
	document.getElementById("x1").value="";
	document.getElementById("x2").value="";
	document.getElementById("y1").value="";
	document.getElementById("y2").value="";
	document.getElementById("dis").value="";
	document.getElementById("a").value="";
	
}
function clear3(){
	document.getElementById("_xa").value="";
	document.getElementById("_ya").value="";
	document.getElementById("_xb").value="";
	document.getElementById("_yb").value="";
	document.getElementById("ap").value="";
	document.getElementById("bp").value="";
	document.getElementById("_xp").value="";
	document.getElementById("_yp").value="";
}
//计算P点的x坐标
function calPx(aa,xa,ya,ab,xb,yb,q){
	var A=xa*Math.sin(aa)*Math.cos(ab);
	var B=xb*Math.cos(aa)*Math.sin(ab);
	var C=q*(ya-yb)*Math.sin(aa)*Math.sin(ab);
	var D=Math.sin(aa)*Math.cos(ab);
	var F=Math.cos(aa)*Math.sin(ab);
	if((D+F)==0){
		clear1();
	}
	else{
		var result=(A+B+C)/(D+F);
	return result;
	}
	
}
//计算P点的y坐标
function calPy(aa,xa,ya,ab,xb,yb,q){
	var A=ya*Math.sin(aa)*Math.cos(ab);
	var B=yb*Math.cos(aa)*Math.sin(ab);
	var C=q*(xb-xa)*Math.sin(aa)*Math.sin(ab);
	var D=Math.sin(aa)*Math.cos(ab);
	var F=Math.cos(aa)*Math.sin(ab);
	if((D+F)==0){
		alert("两点重合或在同一直线！");
		clear1();
	}
	else{
		var result=(A+B+C)/(D+F);
	return result;
	}
	
}
//计算距离
function caldis(x1,y1,x2,y2){
	var A=(x1-x2)*(x1-x2);
	var B=(y1-y2)*(y1-y2);
	return Math.sqrt(A+B);
}
//计算方位角
function cala(x1,y1,x2,y2){
	var result;
	var dy=y2-y1;
	var dx=x2-x1;
	if(dx==0&&dy==0){			//重合
		alert("两点重合！");
		clear2();
	}else if(dx==0&&dy>0){    //在x轴上且dy大于0
		return "90 0 0.00";
	}else if(dx==0&&dy<0){
		return "270 0 0.00";   //在x轴上且dy小于0
	}
	else{
		var tempa=Math.atan(Math.abs(dy/dx));
	if(dx>0&&dy>=0)  //第一象限
	{
		result=radtoangle(tempa);
	}
	if(dx<0&&dy>=0)  //第二象限
	{
		result=radtoangle(pi-tempa);
	}
	if(dx<0&&dy<0)   //第三象限
	{
		result=radtoangle(pi+tempa);
	}
	if(dx>0&&dy<0)
	{                                 //第四象限
		result=radtoangle(2*pi-tempa);
	}
	return result;
	}
}






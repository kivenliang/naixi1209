// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("为什么不休息呢");
	   }else if(Dianji==2){
		   		alert("你是我见过的最听话的女孩纸");
		   		
	   }else if(Dianji==3){
		   		alert("乖乖，早点休息的吧");
		   		
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("真的吗，太开心了");
	}
	

}
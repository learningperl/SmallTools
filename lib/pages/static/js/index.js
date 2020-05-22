//提示区域
var tshow;

$(function () {
	$(document).ready(function() {
	    showmsg("欢迎使用！");
    });
});

function showmsg(str){
    if(tshow != undefined){
        window.clearInterval(tshow);
        tshow = undefined;
    }
    document.getElementById('show').innerHTML=str;
    document.getElementById('show').style.display = "block";
    var div=document.getElementById('show');
    div.style.opacity=1;
    hidden(document.getElementById("show"),1,-0.01);
}
function hidden(o,i,s){
    tshow=setInterval(function(){
    i+=s;
    o.style.opacity=i;
    if(i<0.2){
        window.clearInterval(tshow);
        tshow = undefined;
        document.getElementById('show').style.display = "none";
    }
    },20);
};

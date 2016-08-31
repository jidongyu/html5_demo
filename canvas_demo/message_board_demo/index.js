/**
 * Created by jdy on 2016/8/31.
 */
//提交方法实现
function inputEvent(input){
    var data=document.getElementById(input).value;
    var time=new Date().getTime();
    if(data==""){
        alert("留言不能为空！");
    }else {
        localStorage.setItem(time,data);
        alert("数据保存成功");
        //评论数据保存成功后将评论清空，将评论显示到评论栏里
        document.getElementById(input).value="";
        readEvent('msg');
    }
}

//在评论栏里显示评论
function readEvent(msg){

        var result="<table border=1>";
        for(var i=0;i<localStorage.length;i++)
        {
            var key=localStorage.key(i);
            var value=localStorage.getItem(key);
            var dateT=new Date();
            dateT.setTime(key);
            var dateST=dateT.toGMTString();
            result+="<tr><td>这是第"+i+"条记录</td><td>"+value+"</td><td>"+dateST+"</td></tr>";
        }
        result+="</table>";
        var msgValue=document.getElementById(msg);
        msgValue.innerHTML=result;

}

//删除按钮方法实现
function removeEvent(msg){
    //var context=document.getElementById(msg);
    //context.innerHTML="";
    localStorage.clear();
    readEvent('msg');
}
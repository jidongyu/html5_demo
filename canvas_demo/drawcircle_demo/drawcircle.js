/**
 * Created by JDY on 2016/8/29.
 */
function  draw(id){
    //获取画布控件
    var canvas = document.getElementById(id);
    //获取上下文
    var context = canvas.getContext("2d");
    //设置画笔属性
    context.fillStyle="#f1f2f3";
    context.fillRect(0,0,500,500);
    //context.strockeStyle="";
    //context.lineWidth="";
    //画圆
    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fillStyle="rgba(255,0,0,0.25)"
        context.fill();

    }


}
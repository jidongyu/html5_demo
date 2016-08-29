/**
 * Created by JDY on 2016/8/29.
 */
function draw(id){
   //获取画布
    var canvas = document.getElementById(id);
    //获取上下文
    var context = canvas.getContext("2d");
    //绘制填充背景
    context.fillStyle = "green" ;
    context.fillRect(0,0,800,300);
    context.fillStyle = "white";
    context.strokeStyle = "white";
    context.font = "bold 40px 隶书";
    context.textBaseline="hanging";
    context.fillText("这是测试",0,0);
    context.strokeText("这是测试2",0,40);

}
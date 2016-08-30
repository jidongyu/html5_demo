/**
 * Created by jdy on 2016/8/29.
 */
var i;
var context;
var heiht,width;
function draw(id){
    //获取画布
    var canvas = document.getElementById(id);
    //获取上下文
   context = canvas.getContext("2d");
    heiht=canvas.height;
    width=canvas.width;
    //制作动画
    setInterval(painting,100);
    i=0;

}
function painting(){
    //context.fillStyle="green";
    //context.fillRect(i,0,10,10);
    //i=i+20;
    context.clearRect(0,0,width,heiht);
    context.fillStyle="#f60";
    context.fillRect(i,0,10,10);
    i=i+20;
}
/**
 * Created by jdy on 2016/8/30.
 */
var saveDemo;
function saveStorage(text){
   //saveValue=document.getElementById(text).value;
    saveDemo=document.getElementById(text);
    saveValue=saveDemo.value;
    sessionStorage.setItem("input",saveValue);
    saveDemo.value="";
}

function  pushStorage(msg){
    var pushDom=document.getElementById(msg);
    pushDom.innerHTML=sessionStorage.getItem("input");

}
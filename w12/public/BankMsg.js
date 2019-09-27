var count=0;
var x=function fn_1(){
    console.log(count);
    if(count>2){
        alert("max number of tries over");
    }
}
// $("#opt").val("welcome");
var v1=$("#cardNo").val();
console.log(bankMsg.cardNo_echo);
if (v1==bankMsg.cardNo_echo)
{
    console.log(bankMsg.menuItems)
    let message="cardno:"+v1;
    $("#opt").val(message);
    $("#ipt1").val(bankMsg.menuItems[0]);
    $("#ipt2").val(bankMsg.menuItems[1]);
    $("#ipt3").val(bankMsg.menuItems[2]);
    $("#ipt4").val(bankMsg.menuItems[3]);

}
else{
    count=count+1;
    $("#opt").val("invalid cardno:"+v1);
}




$("#swipebtn").click(x);    
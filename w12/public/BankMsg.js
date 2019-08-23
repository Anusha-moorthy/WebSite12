let bankMsg = { cardNo_echo: 0000 }
$(document).ready(function () {
    // alert('hello')
    $.ajax({
        url: "http://localhost:3000/bankMsg",
        success: (res) => {
            bankMsg = res;
            // alert("success"+bankMsg.cardNo_echo);
        }
    })
})
var count = 0;


var x = function fn_1() {
    // document.getElementById("opt").value="welcome";
    console.log(count);
    if (count > 2) {
        alert("max tries over");


        // $("#cardNo").attr("disabled",true);
    }
    $("#opt").val("Welcome");
    var v1 = $("#cardNo").val();
    console.log(bankMsg.cardNo_echo);
    if (v1 == bankMsg.cardNo_echo) {
        console.log(bankMsg.menuItems);
        let message = 'Card No: ' + v1 + '\n' + 'Balance: ' + bankMsg.balance
        $("#opt").val(message);
        $("#ipt1").val(bankMsg.menuItems[0].lbl);
        $("#ipt2").val(bankMsg.menuItems[1].lbl);
        $("#ipt3").val(bankMsg.menuItems[2].lbl);
        $("#ipt4").val(bankMsg.menuItems[3].lbl);

    }
    else {
        count = count + 1;
        $("#opt").val("ivnvalid card number " + v1);

    }
}
// var f1 = function btn1_click() {
//     console.log("btn1 click");
//     var x1 = bankMsg.menuItems[0].subMenu;
//     var i = 0;
//     for (i = 0; i < x1.length; i++) {
//         console.log(x1[i].lbl);
//     }
//     $("#navSubMenu").click()
// }
var f2 = function btn1_click() {
    console.log("btn1 click");

    var x2 = bankMsg.dataZn_sb.lst;
    var i = 0;
    var statement = ''

    for (i = 0; i < x2.length; i++) {

        statement = statement + x2[i] + '\n'
        // console.log(x2[i]);

    }
    let data = 'statement1:' + statement
    $("#opt").val(data);
}


$("#swipeBtn").click(x);
$("#btn1").click(f2);


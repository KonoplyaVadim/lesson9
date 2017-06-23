/**
 * Created by konoplya on 16.06.2017.
 */
$(document).ready(function () {
    $("#Name").on('change', validName);
    function validName() {
        var pattern = /\w{2,}/;
        if (!pattern.test($(this).val())) {
            $("button[type=submit]").attr("disabled", "true");
            alert("Длина имени - не менее 2 букв");
        }
        else {
            $("button[type=submit]").removeAttr("disabled");
        }
    }
    $("#Email").on('change', validMail);
    function validMail() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        if (!pattern.test($(this).val())) {
            $("button[type=submit]").attr("disabled", "true");
            alert("Введите e-mail в формате ivanov@gmail.com");
        }
        else {
            $("button[type=submit]").removeAttr("disabled");
        }
    }
    $("#Phone").on('change', validPhone);
    function validPhone() {
        var pattern = /\d{7,}/;
        if (!pattern.test($(this).val())) {
            $("button[type=submit]").attr("disabled", "true");
            alert("Длина номера-не менее 7 цифр");
        }
        else {
            $("button[type=submit]").removeAttr("disabled");
        }
    }
    $("input[type=radio]").on("click",delPrice);
    var delivPrice;
    function delPrice() {
        if($("input[type=radio]:checked").attr("id")=="pickup"){
            delivPrice=0;
            console.log(delivPrice);
        }
        else if($("input[type=radio]:checked").attr("id")=="courier"){
            delivPrice=20;
            console.log(delivPrice);
        }
    }
    var cakePrice,
        cakeDim;
    $("option").on("click",price);
    function price() {
        cakeDim=$(this).attr("id");
        if(cakeDim=="small") cakePrice=150;
        else if(cakeDim=="middle") cakePrice=200;
        else if(cakeDim=="big") cakePrice=250;
        console.log(cakePrice);
    }
    var finPrice,
        priceStr;
    $("input[type=button]").on("click",function () {
        finPrice=cakePrice+delivPrice;
        priceStr=finPrice.toString();
        $("#Price").val(priceStr);
        console.log(priceStr);
    });
});


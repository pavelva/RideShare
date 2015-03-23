/**
 * Created by Alex on 3/11/2015.
 */

var serverUrl = "http://localhost:63342/RideShare/";

$(document).ready(function(){
    $("#loginBtn").click(function(){
        var id = server.login($("#loginEmail").val(), $("#loginPass").val());

        if(id != null)
            window.location.href = serverUrl + "?id=" + id;
    });
});
function userRegister(){
    alert("here");
    var pass = document.getElementById("regPass").value;
    if(pass == (document.getElementById("regVerPass").value))
    {
        var name = document.getElementById("regFName").value;
        name += " " + document.getElementById("regLName").value;
        var email = document.getElementById("regEmail").value;
        var phone = document.getElementById("regPhone").value;
        sendToServer(name, email, phone, pass)
    }
    else{
        alert("password and verify password not match");
    }
}

function sendToServer(name, email, phone, pass){
    $.ajax({
        type: "POST",
        url: "http://rideshare-server.herokuapp.com/user",
        data: {
            fullName: name,
            email: email,
            phone: phone,
            password: pass
        },
        //contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert("SUCC ______" + JSON.stringify(data));},
        error: function(errMsg) {
            alert("ERROR ______" + JSON.stringify(errMsg));
        }
    });
}
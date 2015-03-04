/**
 * Created by Alex on 3/2/2015.
 */

$(document).ready(function() {
    $("#publishPostRide").append(addPublishDetails());

    $('main').jScrollPane({
            verticalGutter: 0
        }
    );

    //alert($("#publishPostRide").height());

});

//function changeToPublishRide(){
//    $(".publishPostRide").append(addPublishDetails());
//    $(".publishPostRide").show();
//}

function addPublishDetails(){
    return "" +
        '<div class="publishPostRideHeader">'+
                'Publish New Ride'+
        '</div>'+
        '<div id="publishPostContent" onload="onLoad()">'+
            '<p class="label">'+
                '<span class="text">From :</span>'+
                '<input type="text" name="input" class="inputText" />'+
            '</p>'+
            '<p class="label">'+
                '<span class="text">To :</span>'+
                '<input type="text" name="input" class="inputText" />'+
            '</p>'+
            '<p class="label">'+
                '<span class="text">Stopover :</span>'+
                '<input type="text" id="inputStopOver" name="input" class="inputText" onkeypress="handleEnterKey(event)"/>'+
                '<input type="button" id="submitButton" class="btn" value="+" onclick="addStopOver()"/>'+
            '</p>'+
            '<p class="label">'+
                '<span class=outPutText>'+
                    '<span id=firsOut></span>'+
                    '<input type="button" id="firstButton" class="clearBtn btn a" value="X"  onclick="removeElement(0)"/>'+
                    '<span id=secondOut></span>'+
                    '<input type="button" id="secondButton" class="clearBtn btn a" value="X" onclick="removeElement(1)"/>'+
                    '<span id=thirdOut></span>'+
                    '<input type="button" id="thirdButton" class="clearBtn btn a" value="X" onclick="removeElement(2)"/>'+
                    '<span id=fourthOut></span>'+
                    '<input type="button" id="fourthButton" class="clearBtn btn a" value="X" onclick="removeElement(3)"/>'+
                    '<span id=fifthOut></span>'+
                    '<input type="button" id="fifthButton" class="clearBtn btn a" value="X" onclick="removeElement(4)"/>'+
                '</span>'+
            '</p>' +
            '<p class="label">'+
                '<span class="text">Date :</span>'+
                '<input type="date" id="dateInput" name="Date" class="inputText" />'+
            '</p>'+
            '<p class="label">'+
                '<span class="text">From Time :</span>'+
                '<input type="time" id="fromTimeInput" class="inputText timeInput" />'+
            '</p>'+
            '<p class="label">'+
                '<span class="text">To Time:</span>'+
                '<input type="time" id="toTimeInput" class="inputText timeInput" />'+
            '</p>'+
            '<p class="label">'+
                '<input type="button" class="publishPostButton btn" value="Publish"/>'+
                '<input type="button" class="clearButton btn" value="Clear" onclick="clearAllFields()"/>'+
            '</p>'+
        '</div>'
}

var c = 0;
var elemArr = ["#firsOut","#secondOut","#thirdOut","#fourthOut","#fifthOut"];
var btnArr = ["#firstButton","#secondButton","#thirdButton","#fourthButton","#fifthButton"];
function addStopOver(){
    var inElement = $("#inputStopOver");
    var out = inElement.val();
    if(out != "") {
        if (c < 5) {
            inElement.val("");
            $(elemArr[c]).text(out).show();
            $(btnArr[c]).show();
            c++;
        }
        else {
            alert("can't add more than five stopover")
        }
    }

}

function removeElement(num){
    for (i=num; i<elemArr.length-1; i++){
        $(elemArr[i]).text($(elemArr[i+1]).text());
    }
    $(elemArr[c-1]).append("").hide();
    $(btnArr[c-1]).hide();
    c--;
}

function handleEnterKey(e){
    if(e.keyCode == 13){
        addStopOver()
    }
}

function clearAllFields() {
    var arr = document.getElementsByName("input");
    for(i=0 ; i<arr.length ; i++){
        arr[i].value = "";
    }
    while(c>0){
        removeElement(c);
    }
    refreshDateAndTime();
}

window.addEventListener('load', function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    yyyy = parseInt(yyyy);
    if(mm < 10){
        mm = '0' + mm;
    }
    if(dd < 10){
        dd = '0' + dd;
    }
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("dateInput").value = today;

    if(hour < 10){
        hour = '0' + hour;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }

    today = hour+':'+minutes;
    document.getElementById("fromTimeInput").value = today;
    document.getElementById("toTimeInput").value = today;
});

function refreshDateAndTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    yyyy = parseInt(yyyy);
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (dd < 10) {
        dd = '0' + dd;
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("dateInput").value = today;

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    today = hour + ':' + minutes;
    document.getElementById("fromTimeInput").value = today;
    document.getElementById("toTimeInput").value = today;
}
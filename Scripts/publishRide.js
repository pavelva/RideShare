

//function addPublishDetails(){
//    return "" +
//            '<div class="publishPostRideHeader">'+
//            'Publish New Ride'+
//        '</div>'+
//            '<div id="publishContent">'+
//            '<div id="publishContentRight">'+
//            '<p class="label">'+
//        '<span class="text">Date :</span>'+
//        '<input type="date" id="dateInput" name="Date" class="inputText" />'+
//    '</p>'+
//        '<p class="label">'+
//    '<span class="text">From Time :</span>'+
//        '<input type="time" id="fromTimeInput" class="inputText timeInput" />'+
//    '</p>'+
//        '<p class="label">'+
//    '<span class="text">To Time :</span>'+
//        '<input type="time" id="toTimeInput" class="inputText timeInput" />'+
//    '</p>'+
//        '<p class="label">'+
//    '<span class="text">Smoking :</span>'+
//        '<input type="radio" class="radioInput" id="smokeYes" name="radio" />'+
//        '<label class="radioInput" for="smokeYes">'+
//    '<span></span>Yes'+
//    '</label>'+
//        '<input type="radio" class="radioInput" id="smokeNo" name="radio"/>'+
//        '<label class="radioInput" for="smokeNo">'+
//    '<span></span>No'+
//    '</label>'+
//        '<input type="radio" class="radioInput" id="smokeDontCare" name="radio" checked="checked"/>'+
//        '<label class="radioInput" for="smokeDontCare">'+
//    '<span></span>Dont care'+
//    '</label>'+
//    '</p>'+
//        '<p class="label">'+
//    '<span class="text">Price :</span>'+
//        '<input type="number" id="priceInput" class="inputText" />'+
//    '</p>'+
//    '</div>'+
//        '<div id="publishContentLeft">'+
//        '<p class="label">'+
//    '<span class="text">From :</span>'+
//        '<input type="text" id="inputSource" name="input" class="inputText" onkeyup="sourceHandleKey(event)"/>'+
//    '</p>'+
//        '<p class="label">'+
//    '<span class="text">To :</span>'+
//        '<input type="text" id="inputDest" name="input" class="inputText" onkeyup="destHandleKey(event)"/>'+
//    '</p>'+
//        '<p class="label">'+
//    '<span class="text">Stopover :</span>'+
//        '<input type="text" id="inputStopOver" name="input" class="inputText" onkeypress="handleEnterKey(event)"/>'+
//        '<input type="button" id="submitButton" class="btn" value="+" onclick="addStopOver()"/>'+
//    '</p>'+
//        '<div id="sourceOutDiv" class=outPutTextSourceDest>'+
//    '<p id="sourceOut" class="stopOverOut"></p>'+
//    '</div>'+
//        '<div id="destOutDiv" class=outPutTextSourceDest>'+
//    '<p id="destOut" class="stopOverOut"></p>'+
//    '</div>'+
//        '<div class=outPutText>'+
//        '<div id="stopOverLabelFirst" class="stopOverLabel">'+
//    '<p id=firsOut class="stopOverOut"></p>'+
//        '<p id=firsOutDetails class="stopOverOutDetails">'+
//    '<span class="stopTimeSpan">Time :</span>'+
//        '<input type="text" class="stopTimeInput" value="30"/>'+
//    '<span class="stopPriceSpan">Price :</span>'+
//        '<input type="text" class="stopPriceInput" value="40"/>'+
//    '</p>'+
//    '</div>'+
//        '<input type="button" id="firstButton" class="clearBtn btn a" value="X"  onclick="removeElement(0)"/>'+
//        '<div id="stopOverLabelSecond" class="stopOverLabel">'+
//    '<p id=secondOut class="stopOverOut"></p>'+
//        '<p id=secondOutDetails class="stopOverOutDetails">'+
//    '<span class="stopTimeSpan">Time :</span>'+
//        '<input type="text" class="stopTimeInput" value="30"/>'+
//    '<span class="stopPriceSpan">Price :</span>'+
//        '<input type="text" class="stopPriceInput" value="40"/>'+
//    '</p>'+
//    '</div>'+
//        '<input type="button" id="secondButton" class="clearBtn btn a" value="X" onclick="removeElement(1)"/>'+
//        '<div id="stopOverLabelThird" class="stopOverLabel">'+
//    '<p id=thirdOut class="stopOverOut"></p>'+
//        '<p id=thirdOutDetails class="stopOverOutDetails">'+
//    '<span class="stopTimeSpan">Time :</span>'+
//        '<input type="text" class="stopTimeInput" value="30"/>'+
//    '<span class="stopPriceSpan">Price :</span>'+
//        '<input type="text" class="stopPriceInput" value="40"/>'+
//    '</p>'+
//    '</div>'+
//        '<input type="button" id="thirdButton" class="clearBtn btn a" value="X" onclick="removeElement(2)"/>'+
//        '<div id="stopOverLabelFourth" class="stopOverLabel">'+
//    '<p id=fourthOut class="stopOverOut"></p>'+
//        '<p id="fourthOutDetails" class="stopOverOutDetails">'+
//    '<span class="stopTimeSpan">Time :</span>'+
//        '<input type="text" class="stopTimeInput" value="30"/>'+
//    '<span class="stopPriceSpan">Price :</span>'+
//        '<input type="text" class="stopPriceInput" value="40"/>'+
//    '</p>'+
//    '</div>'+
//        '<input type="button" id="fourthButton" class="clearBtn btn a" value="X" onclick="removeElement(3)"/>'+
//        '<div id="stopOverLabelFifth" class="stopOverLabel">'+
//    '<p id=fifthOut class="stopOverOut"></p>'+
//        '<p id="fifthOutDetails" class="stopOverOutDetails">'+
//    '<span class="stopTimeSpan">Time :</span>'+
//        '<input type="text" class="stopTimeInput" value="30"/>'+
//    '<span class="stopPriceSpan">Price :</span>'+
//        '<input type="text" class="stopPriceInput" value="40"/>'+
//    '</p>'+
//    '</div>'+
//        '<input type="button" id="fifthButton" class="clearBtn btn a" value="X" onclick="removeElement(4)"/>'+
//    '</div>'+
//    '</div>'+
//        '<p class="label" >'+
//        '<input type="button" class="publishPostButton btn" value="Publish"/>'+
//        '<input type="button" class="clearAllDataButton btn" value="Clear" onclick="clearAllFields()"/>'+
//    '</p>'+
//    '</div>'
//}

var c = 0;
var elemArr = ["#firsOut","#secondOut","#thirdOut","#fourthOut","#fifthOut"];
var elemArrDetails = ["#stopOverLabelFirst","#stopOverLabelSecond","#stopOverLabelThird"
                        ,"#stopOverLabelFourth","#stopOverLabelFifth"];
var btnArr = ["#firstButton","#secondButton","#thirdButton","#fourthButton","#fifthButton"];

function addStopOver(){
    var inElement = $("#inputStopOver");
    var out = inElement.val();
    if(out != "") {
        if (c < 5) {
            if(out.length < 37) {
                inElement.val("");
                $(elemArr[c]).text(out).show();
                $(btnArr[c]).show();
                $(elemArrDetails[c]).show();
                c++;
            }
            else{
                alert("too long")
            }
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
    $(elemArrDetails[c-1]).hide();
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
function sourceHandleKey(e){
    if(e.keyCode != 13){
        var inElement = $("#inputSource");
        var out = inElement.val();
            if(out.length < 37) {
                $("#sourceOut").text(out).show();
            }
            else{
                alert("too long")
            }
    }
}

function destHandleKey(e){
    if(e.keyCode != 13){
        var inElement = $("#inputDest");
        var out = inElement.val();
        if(out.length < 37) {
            $("#destOut").text(out).show();
        }
        else{
            alert("too long")
        }
    }
}

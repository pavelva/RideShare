
//function addPostDetails(){
//    return "" +
//            '<div class="publishPostRideHeader">'+
//            'Post New Request'+
//        '</div>'+
//            '<div id="postContent">'+
//            '<div id="postContentRight">'+
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
//    '<span class="text">Max Price :</span>'+
//        '<input type="number" id="priceInput" class="inputText" />'+
//    '</p>'+
//
//    '</div>'+
//        '<div id="postContentLeft">'+
//        '<p class="label">'+
//    '<span class="text">From :</span>'+
//        '<input type="text" id="inputSource" name="input" class="inputText" onkeyup="sourceHandleKey(event)"/>'+
//    '</p>'+
//        '<p class="label">'+
//    '<span class="text">To :</span>'+
//        '<input type="text" id="inputDest" name="input" class="inputText" onkeyup="destHandleKey(event)"/>'+
//    '</p>'+
//        '<div class="radioDiv">'+
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
//    '<span class="text">Bags :</span>'+
//        '<input type="radio" class="radioInput" id="1bad" name="radio2" />'+
//        '<label class="radioInput" for="1bad">'+
//    '<span></span>Big bag'+
//    '</label>'+
//        '<input type="radio" class="radioInput" id="0bag" name="radio2" checked="checked"/>'+
//        '<label class="radioInput" for="0bag">'+
//    '<span></span>None/Small bag'+
//    '</label>'+
//    '</p>'+
//    '</div>'+
//    '</div>'+
//        '<p class="label" >'+
//        '<input type="button" class="publishPostButton btn" value="Post"/>'+
//        '<input type="button" class="clearAllDataButton btn" value="Clear" onclick="clearAllFields()"/>'+
//    '</p>'+
//    '</div>'
//}


function clearAllPostFields() {
    var arr = document.getElementsByName("postInput");

    for(i=0 ; i<arr.length ; i++){
        arr[i].value = "";
    }

    refreshPostDateAndTime();
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
    document.getElementById("postDateInput").value = today;

    if(hour < 10){
        hour = '0' + hour;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }

    today = hour+':'+minutes;
    document.getElementById("postFromTimeInput").value = today;
    document.getElementById("postToTimeInput").value = today;
});

function refreshPostDateAndTime() {
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
    document.getElementById("postDateInput").value = today;

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    today = hour + ':' + minutes;
    document.getElementById("postFromTimeInput").value = today;
    document.getElementById("postToTimeInput").value = today;
}

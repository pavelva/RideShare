/**
 * Created by Alex on 3/22/2015.
 */

function reverseDirection(){
    var sourceElement = $("#sourceSearchInput");
    var destinationElement = $("#destinationSearchInput");
    var sourceVal = sourceElement.val();
    sourceElement.val(destinationElement.val());
    destinationElement.val(sourceVal);
}

function buildSearchResults() {
    var searchRes = $("#searchResultsContentDiv");
    searchRes.slideUp();
    searchRes.empty();
    var rowInTable = "" +
        '<div class="container">' +
            '<table class="searchTable">' +
                '<tr id="tableHeaders">' +
                '<td class="headerCell" style="width: 20%">Driver</td>' +
                '<td class="headerCell" style="width: 20%">Source</td>' +
                '<td class="headerCell" style="width: 20%">Destination</td>' +
                '<td class="headerCell" style="width: 15%">Date</td>' +
                '<td class="headerCell" style="width: 15%">Time</td>' +
                '<td class="headerCell" style="width: 10%">price</td>' +
                '</tr>' +
                findRelevantRides()+
            '</table>' +
        '</div>';
    searchRes.append(rowInTable).slideDown();
}
function findRelevantRides(){

    var ans = "";
    for(i=0;i<4;i++) {
        for (ride in rides) {
            if (rides[ride].status == 'Open') {
                //if (rides[ride].from == $('#sourceSearchInput').val()){
                    ans += '<tr class="tableRowDetails">' +
                    '<td class="regularCell">' + rides[ride].driver + '</td>' +
                    '<td class="regularCell">' + rides[ride].from + '</td>' +
                    '<td class="regularCell">' + rides[ride].to + '</td>' +
                    '<td class="regularCell">' + rides[ride].date + '</td>' +
                    '<td class="regularCell">' + rides[ride].fromTime + '-' + rides[ride].toTime + '</td>' +
                    '<td class="regularCell">35</td>' +
                    '</tr>';
                //}
            }
        }
    }
    return ans;
}

//function sendToServerSearchParam(name, email, phone, pass){
//    $.ajax({
//        type: "POST",
//        url: "http://rideshare-server.herokuapp.com/user",
//        data: {
//            fullName: name,
//            email: email,
//            phone: phone,
//            password: pass
//        },
//        //contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function(data){alert("SUCC ______" + JSON.stringify(data));},
//        error: function(errMsg) {
//            alert("ERROR ______" + JSON.stringify(errMsg));
//        }
//    });
//}
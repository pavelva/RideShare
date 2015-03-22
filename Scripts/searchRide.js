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
        for (ride in rides) {
            if (rides[ride].status == 'Open') {
                ans +=  '<tr class="tableRowDetails">'+
                            '<td class="regularCell">'+rides[ride].driver+'</td>'+
                            '<td class="regularCell">'+rides[ride].from+'</td>'+
                            '<td class="regularCell">'+rides[ride].to+'</td>'+
                            '<td class="regularCell">'+rides[ride].date+'</td>'+
                            '<td class="regularCell">'+rides[ride].fromTime+'-'+rides[ride].toTime+'</td>'+
                            '<td class="regularCell">35</td>'+
                        '</tr>';
            }
        }
    return ans;
}
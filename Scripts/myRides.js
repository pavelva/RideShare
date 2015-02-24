/**
 * Created by Pavel on 24/02/2015.
 */
$(document).ready(function(){
    //init();

    var rides = loadMyRides(1);
    for (i in rides)
        updateMyRides(rides[i]);
    //updateCurrentPage(pages.myRides);
});

function updateMyRides(ride) {
    if (ride.type == 'Ride')
        $(".myRides").append(createRide(ride));
    else
        $(".myRides").append(createRequest(ride));
}

function createRide(ride){
    return "" +
        '<div class="myRide">' +
            '<div class="header">' +
                '<span class="type">' + ride.type +'</span>' +
                '<span class="route">' + 'Beer Sheva - Haifa' + '</span>' +
                '<span class="status">' + ride.status + '</span>' +
            '</div>' +
            '<div class="body">' +
                createRidesLeftSide(ride) +
                '<div class="right">' +
                    '<span class="riders">Riders:</span>' +
                    (ride.riders.length == 0 ? ' <p class="rider">No Riders On This Ride</p>' :
                        createRidersList(ride)) +
                '</div>' +
            '</div>' +
            '<div class="controlls">' +
                (ride.status != 'Done'?'<input type="button" class="controll" value="Update Ride"/>':'') +
            '</div>' +
        '</div>';
}

function createRequest(ride){
    return "" +
        '<div class="myRide">' +
            '<div class="header">' +
                '<span class="type">' + ride.type + '</span>' +
                '<span class="route">' + 'Beer Sheva - Haifa' + '</span>' +
                '<span class="status">' + ride.status + '</span>' +
            '</div>' +
            '<div class="body">' +
                createRidesLeftSide(ride) +
                '<div class="right">' +
                    '<span class="riders">Riders:</span>' +
                    (ride.riders.length == 0 ? ' <p class="rider">No Riders On This Ride</p>' :
                        createRidersList(ride)) +
                '</div>' +
            '</div>' +
            '<div class="controlls">' +
                (ride.status != 'Done' ? '<input type="button" class="controll" value="Cancel Request"/>' : '') +
                (ride.status == 'Done' && !ride.ranked ? '<input type="button" class="controll" value="Rank Ride"/>' : '') +
            '</div>' +
        '</div>';
}

function createRidesLeftSide(ride) {
    return '<div class="left">' +
        '<p class="rideDetail"> ' +
        '<span class="detailHeader">Driver:</span>' +
        '<span class="detailContent">' + ride.driver + '</span>' +
        '</p>' +
        '<p class="rideDetail"> ' +
        '<span class="detailHeader">Date:</span>' +
        '<span class="detailContent">' + ride.date + '</span>' +
        '</p>' +
        '<p class="rideDetail"> ' +
        '<span class="detailHeader">Departure Time:</span>' +
        '<span class="detailContent">' + ride.fromTime + ' - ' + ride.toTime + '</span> ' +
        '</p>' +
        '</div>'
}

function createRidersList(ride) {
    var ans = ""

    for (i in ride.riders) {
        ans += '<p class="rider">' +
        '<span class="riderName">' +
        ride.riders[i].name + ' ' + ride.riders[i].lastName +
        '</span>' +
        (ride.type == 'Ride' && ride.status == 'Done' && ride.riders[i].ranked == false? '<input type="button" class="riderRank" value="Rank"/>' : '') +
        '</p>';
    }

    return ans;
}
/**
 * Created by Pavel on 24/02/2015.
 */

$(document).ready(function(){


    //init();

    var rides = loadMyRides(1);
    for (i in rides)
        updateMyRides(rides[i]);
    //updateCurrentPage(pages.myRides);

    $('main').jScrollPane({
            verticalGutter: 0
        }
    );
});

function updateMyRides(ride) {
    if (ride.type == 'Ride')
        $("#myRides").append(createRide(ride));
    else
        $("#myRides").append(createRequest(ride));
}

function createRide(ride){
    return "" +
        '<div class="myRide container">' +
            '<div class="header">' +
                '<span class="type">' + ride.type +'</span>' +
                '<span class="route">' + ride.from + ' - ' + ride.to + '</span>' +
                '<span class="status">' + ride.status + '</span>' +
            '</div>' +
            '<div class="body">' +
                '<div class="right">' +
                '<span class="head">Riders:</span>' +
                (ride.riders.length == 0 ? ' <p class="rider">No Riders On This Ride</p>' :
                    createRidersList(ride)) +
                '</div>' +
                '<div class="middle">' +
                    '<span class="head">Stops:</span>' +
                    (ride.stops.length == 0? '<p class="rider">No Stops On This Ride</p>' :
                    createStopList(ride)) +
                '</div>' +
                createRidesLeftSide(ride) +
            '</div>' +
            '<div class="controls">' +
                (ride.status != 'Done'?'<input type="button" class="btn control a" value="Update Ride"/>':'') +
            '</div>' +
        '</div>';
}

function createRequest(ride){
    return "" +
        '<div class="myRide container">' +
            '<div class="header">' +
                '<span class="type">' + ride.type + '</span>' +
                '<span class="route">' + ride.from + ' - ' + ride.to + '</span>' +
                '<span class="status">' + ride.status + '</span>' +
            '</div>' +
            '<div class="body">' +
                '<div class="right">' +
                    '<span class="head">Riders:</span>' +
                    (ride.riders.length == 0 ? ' <p class="rider">No Riders On This Ride</p>' :
                        createRidersList(ride)) +
                '</div>' +
                createRidesLeftSide(ride) +
            '</div>' +
            '<div class="controls">' +
                (ride.status != 'Done' ? '<input type="button" class="btn control a" value="Update Request"/>' : '') +
                (ride.status == 'Done' && !ride.ranked ? '<input type="button" class="btn control a" value="Rank Ride"/>' : '') +
            '</div>' +
        '</div>';
}

function createRidesLeftSide(ride) {
    return '<div class="left">' +
                '<div calss="left">' +
                    '<p class="rideDetail"> ' +
                    '<span class="detailHeader head">Driver:</span>' +
                    '<span class="detailContent">' + ride.driver + '</span>' +
                    '</p>' +
                    '<p class="rideDetail"> ' +
                    '<span class="detailHeader head">Date:</span>' +
                    '<span class="detailContent">' + ride.date + '</span>' +
                    '</p>' +
                    '<p class="rideDetail"> ' +
                    '<span class="detailHeader head">Departure Time:</span>' +
                    '<span class="detailContent">' + ride.fromTime + ' - ' + ride.toTime + '</span> ' +
                    '</p>' +
                '</div>' +
            '</div>'
}

function createRidersList(ride) {
    var ans = ""

    for (i in ride.riders) {
        ans += '<p class="line">' +
        (ride.type == 'Ride' && ride.status == 'Done' && ride.riders[i].ranked == false? '<input type="button" class="btn riderRank a" value="Rank"/>' : '') +
        '<span>' +
        ride.riders[i].name + ' ' + ride.riders[i].lastName +
        '</span>' +
        '</p>';
    }

    return ans;
}

function createStopList(ride){
    var ans = ""

    for (i in ride.stops) {
        ans += '<p class="line">' +
        '<span>' + ride.stops[i] + '</span>' +
        '</p>';
    }

    return ans;
}
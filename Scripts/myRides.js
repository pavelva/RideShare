/**
 * Created by Pavel on 24/02/2015.
 */
$(document).ready(function(){


    //init();

    var rides = loadMyRides(1);
    for (i in rides)
        updateMyRides(rides[i]);
    //updateCurrentPage(pages.myRides);

    $('.myRides').jScrollPane({
            horizontalGutter: 0,
            verticalGutter: 0

        }
    );

});

function updateMyRides(ride) {
    if (ride.type == 'Ride')
        $(".myRides").append(createRide(ride));
    else
        $(".myRides").append(createRequest(ride));
}

function createRide(ride){
    return "" +
        '<div class="myRide container">' +
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
                (ride.status != 'Done'?'<input type="button" class="btn controll a" value="Update Ride"/>':'') +
            '</div>' +
        '</div>';
}

function createRequest(ride){
    return "" +
        '<div class="myRide container">' +
            '<div class="header">' +
                '<span class="type">' + ride.type + '</span>' +
                '<span class="route">' + 'Beer Sheva - Haifa' + '</span>' +
                '<span class="status">' + ride.status + '</span>' +
            '</div>' +
            '<div class="body">' +
                '<div class="right">' +
                    '<span class="riders">Riders:</span>' +
                    (ride.riders.length == 0 ? ' <p class="rider">No Riders On This Ride</p>' :
                        createRidersList(ride)) +
                '</div>' +
                createRidesLeftSide(ride) +
            '</div>' +
            '<div class="controlls">' +
                (ride.status != 'Done' ? '<input type="button" class="btn controll a" value="Update Request"/>' : '') +
                (ride.status == 'Done' && !ride.ranked ? '<input type="button" class="btn controll a" value="Rank Ride"/>' : '') +
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
        (ride.type == 'Ride' && ride.status == 'Done' && ride.riders[i].ranked == false? '<input type="button" class="btn riderRank a" value="Rank"/>' : '') +
        '<span class="riderName">' +
        ride.riders[i].name + ' ' + ride.riders[i].lastName +
        '</span>' +
        '</p>';
    }

    return ans;
}
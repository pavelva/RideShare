/**
 * Created by Pavel on 24/02/2015.
 */
var filterStatus;
var filterType;

var myRidesObjects = [];
var myRidesScrollerApi;

var timeInterval = 400;

function updateScroll(){
    setTimeout(function(){
        myRidesScrollerApi.reinitialise();
        $('main .jspVerticalBar').css('display','none');
        $('main .jspVerticalBar').slideDown(timeInterval);
    },timeInterval);
}

function initMyRidesPage(){
    initMyRidesFilters();

    var myRides = server.getMyRides(user.id);
    for (i in myRides) {
        updateMyRides(myRides[i]);
    }

    filterStatus = function(obj){return true;};
    filterType = function(obj){return true;};

}

function updateMyRides(ride) {
    if (ride.type == 'Ride') {
        createRide(ride, function(rideHtml){
            $("#myRides").append(rideHtml);
        });
    }
    else {
        createRequest(ride);
    }
}

function createRide(rideObj, appendFunc){
    var ride = rideObj.rideDetails;
    var rd = "" +
        '<div class="myRide container" id="rd' + ride.id + '">' +
            '<div class="header">' +
                '<span class="type">' + rideObj.type +'</span>' +
                '<span class="route">' + ride.from + ' - ' + ride.to + '</span>' +
                '<span class="status">' + ride.status + '</span>' +
            '</div>' +
            '<div class="body">' +
                '<div class="right">' +
                '<span class="head">Riders:</span>' +
                (ride.riders.length == 0 ? ' <p class="rider">No Riders</p>' :
                    createRidersList(ride, 'Ride')) +
                '</div>' +
                '<div class="middle">' +
                    '<span class="head">Stops:</span>' +
                    (ride.stops.length == 0? '<p class="rider">No Stops</p>' :
                    createStopList(ride)) +
                '</div>' +
                createRidesLeftSide(ride) +
            '</div>' +
            '<div class="controls">' +
                (ride.status != 'Done'?'<input id="updateRideBtn' + ride.id+ '" type="button" class="btn control a" value="Update Ride"/>':'') +
            '</div>' +
        '</div>';

    appendFunc(rd);

    if(ride.status != 'Done'){
        $('#updateRideBtn' + ride.id).click(function(){
            var content = '<div>' + ride.from + '</div>';
            loadPopup(content);
        });
    }

    var curObject = $('#rd' + ride.id);
    myRidesObjects.push({object: curObject, type: 'ride', status: ride.status});

    return rd;
}

function createRequest(requestObj){
    var ride = requestObj.rideDetails;
    var rq =   "" +
        '<div class="myRide container" id="rq' + requestObj.id+ '">' +
            '<div class="header">' +
                '<span class="type">' + requestObj.type + '</span>' +
                '<span class="route">' + ride.from + ' - ' + ride.to + '</span>' +
                '<span class="status">' + ride.status + '</span>' +
            '</div>' +
            '<div class="body">' +
                '<div class="right">' +
                    '<span class="head">Riders:</span>' +
                    (ride.riders.length == 0 ? ' <p class="rider">No Riders</p>' :
                        createRidersList(ride, 'Request')) +
                '</div>' +
                createRidesLeftSide(ride) +
            '</div>' +
            '<div class="controls">' +
                (requestObj.status != 'Done' ? '<input id="updateRequestBtn' + requestObj.id + '" type="button" class="btn control a" value="Update Request"/>' : '') +
                (requestObj.status == 'Done' && !requestObj.ranked ? '<input id="rankRideBtn' + requestObj.id + '" type="button" class="btn control a" value="Rank Ride"/>' : '') +
            '</div>' +
        '</div>';
    $("#myRides").append(rq);

    if(ride.status == 'Done'){
        $('#rankRideBtn' + requestObj.id).click(function(){
            var content = '<div class="rankRide">' +
                '<h2 class="header">Rank Ride</h2>' +
                '<div class="details">' +
                    '<p class="content">To: ' + ride.to + '</p>' +
                    '<p class="content">From: ' + ride.from + '</p>' +
                    '<p class="content">Driver: ' + ride.driver + '</p>' +
                    '<p class="content">On: ' + ride.date + '</p>' +
                '</div>' +
                '<div class="stars">' +
                    '<span class="star" id="rank5"></span>' +
                    '<span class="star" id="rank4"></span>' +
                    '<span class="star" id="rank3"></span>' +
                    '<span class="star" id="rank2"></span>' +
                    '<span class="star" id="rank1"></span>' +
                '</div>'+
                '<input type="button" class="btn control a" value="Save"/>' +
                '<input type="button" class="btn control a" value="Close" onclick="closePopup()" autofocus/>' +
              '</div>';
            loadPopup(content);

            var saveBtn = $("#popup .rankRide input:nth-of-type(1)");
            var stars = [$("#rank1"), $("#rank2"), $("#rank3"), $("#rank4"), $("#rank5")];

            for(var i = 1; i<=5; i++){
                updateRank(i);
            }

            function updateRank(rank) {
                stars[rank-1].click(function(){
                    for(var j=0 ; j<=rank-1; j++){
                        stars[j].css("background-image","url(" + serverUrl + "Images/fullStar.png)");
                    }

                    for(var j=rank ; j<5; j++){
                        stars[j].css("background-image","url(" + serverUrl + "Images/star.png)");
                    }

                    saveBtn.unbind('click');
                    saveBtn.click(function () {
                        server.rankRide(requestObj.id, ride.driverID, user.id, rank, function(){
                            $("#rankRideBtn" + requestObj.id).slideUp(300);
                            setTimeout(function(){
                                updateScroll();
                                closePopup();
                            }, 300);
                        }, function(){

                        });
                    });
                });


            }
        });
    }

    var curObject = $('#rq' + requestObj.id);
    myRidesObjects.push({object: curObject, type: 'request', status: requestObj.status});
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

function createRidersList(ride, type) {
    var ans = ""

    for (i in ride.riders) {
        ans += '<p class="line">' +
        (type == 'Ride' && ride.status == 'Done' && ride.riders[i].ranked == false? '<input type="button" class="btn riderRank a" value="Rank"/>' : '') +
        '<span style="display:block;border:1px solid rgba(255,255,255,0);">' +
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

function addRide(rideObj){
    alert('add ride');
    alert(rideObj.rideDetails.id);
    createRide(rideObj, function(rideHtml){
        alert('start append');
        $(rideHtml).insertAfter("#myRides .pageHeader");
        alert('finish append');
    });
}
// ---------FILTERS-----------
function initMyRidesFilters(){
    $("#btnMyRidesAll").css('color', 'white');
    $("#btnMyRidesStatusAll").css('color', 'white');
    $("#btnMyRidesAll").click(function(){
        filterType = function(obj){return true;};
        filter($(this), 'filterTypeBtn');
    });

    $("#btnMyRidesRides").click(function(){
        filterType = function(obj){return obj.type == 'ride';};
        filter($(this), 'filterTypeBtn');
    });

    $("#btnMyRidesRequests").click(function(){
        filterType = function(obj){return obj.type == 'request';};
        filter($(this), 'filterTypeBtn');
    });

    $("#btnMyRidesStatusAll").click(function(){
        filterStatus = function(obj){return true;};
        filter($(this), 'filterStatusBtn');
    });

    $("#btnMyRidesStatusDone").click(function(){
        filterStatus = function(obj){return obj.status == 'Done'};
        filter($(this), 'filterStatusBtn');
    });

    $("#btnMyRidesStatusOpen").click(function(){
        filterStatus = function(obj){return obj.status == 'Open'};
        filter($(this), 'filterStatusBtn');
    });

    $("#btnMyRidesStatusPending").click(function(){
        filterStatus = function(obj){return obj.status == 'Pending'};
        filter($(this), 'filterStatusBtn');
    });

    $("#btnMyRidesStatusClosed").click(function(){
        filterStatus = function(obj){return obj.status == 'Closed'};
        filter($(this), 'filterStatusBtn');
    });
}

function filter(btn, btnClass){
    $('main .jspVerticalBar').slideUp();
    filterAll(btnClass);
    btn.css('color', 'white');
    setTimeout(function(){
        myRidesObjects.forEach(function(obj){
            if(filterType(obj) && filterStatus(obj)) {
                obj.object.fadeIn(timeInterval);
            }
        });
        updateScroll();
    }, timeInterval);
}

function filterAll(btnClass){
    $('.' + btnClass).css('color','#ced0cc')
    myRidesObjects.forEach(function(req){
        req.object.fadeOut(timeInterval-100);
    });
}



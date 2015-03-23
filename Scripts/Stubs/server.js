
$(document).ready(function(){
    $.getScript("Scripts/Stubs/users.js").done(function(){
        $.getScript("Scripts/Stubs/data.js");
    });
});

var server = {
    login: function(userID, password) {
        for (index in users) {
            var user = users[index];
            if (userID == user.email && user.password) {
                return index;
            }

            return null;
        }

        return 0;
    },
    publish: function(source, destination, arrStopOver, date, fromTime, toTime, numPassengers, price) {
        rides[rides.length] = {
            status: 'Open',
            id: ''+rides.length+''+rides.length+''+rides.length+''+rides.length,
            driver: user.name+' '+user.lastName,
            driverID: user.id,
            date: date,
            fromTime: fromTime,
            toTime: toTime,
            riders: [],
            from: source,
            to: destination,
            stops: arrStopOver
        };
        return rides[rides.length-1]
    },
    getUser: function(id){
        return users[id];
    },
    getMyRides: function(userID){
        var ansRides = myRidesData[userID];
        if(ansRides == undefined) {
            alert('No Such MyRides Page For User ID :' + userID);
            return [];
        }

        return ansRides;
    },

    rankRide: function(rideId, driverID, rankerId, rank, sucFunc, failFunc){
        sucFunc();
    },
    deleteNotification: function(userID, notificationID, sucFunc, failFunc){
        sucFunc();
    }
}
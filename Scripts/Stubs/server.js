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
                return user.id;
            }
        }

        return 0;
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

    rankRide: function(rideId, driverID, rankerId, rank, callback){
        for(user in users){
            return;
        }
    }
}
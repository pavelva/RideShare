$.getScript("Scripts/Stubs/users.js");
$.getScript("Scripts/Stubs/data.js");

var server = {
    login: function(userID, password) {
        for (index in users) {
            var user = users[index];
            if (userID == user.privateData.email && user.privateData.password) {
                return user.publicData.id;
            }
        }

        return 0;
    },
    getUser: function(id){
        return users[id];
    },
    getMyRides: function(userID){
        var ansRides = myRidesData[userID];
        if(ansRides == undefined)
            alert('No Such MyRides Page For User ID :' + userID);

        return ansRides;
    },

    rankRide: function(rideId, driverID, rankerId, rank){
        for(userRide in myRides){
            alert(myRides[userRide].id);
            if (myRides[userRide].id == driverID){
                alert(myRides[userRide].id);
            }
        }
    }
}
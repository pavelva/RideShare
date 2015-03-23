/**
 * Created by Pavel on 06/03/2015.
 */

var notificationsScrollerApi;

function updateUserCard(user){
    loadUserImage(user);
    loadUserDetails(user);
    loadRanks(user.ranking.driver, "driver");
    loadRanks(user.ranking.rider, "rider");

}

function loadUserImage(user){
    var image = user
        .image;
    if(image == null) {
        image = serverUrl + '/Images/jhonDo.jpg';
    }

    $("#userImg").css("background-image", 'url("' + image + '")');
}
function loadUserDetails(user){
    $("#userName").append(user
        .name);
    $("#userLastName").append(user
        .lastName);
    $("#email .detail2").append(user.email);
    $("#phone .detail2").append(user.phone);
}

function loadUserDriverRanking(user){
    loadRanks(user, "driver");
}

function loadUserRiderRanking(user){
    return "";
}

function loadRanks(rank, type) {
    $("#ranks #" + type + " .totalRating").append(rank.rating);
    $("#ranks #" + type + " .smallRating").append(rank.rating);
    $("#ranks #" + type + " .ridesCount").append(rank.rides);
    $("#ranks #" + type + " .ranksCount").append(rank.ranks);

    var rating = rank.rating;
    var star;
    for (starCount = 0; starCount < 5; starCount++) {
        star = (rating >= 1 ? 'full' : rating > 0 ? 'half' : 'empty');
        $("#ranks #" + type + " .stars").append('<span class="star ' + star + '"></span>');

        rating--;
    }
}

function loadNotifications(user){
    var notificationContainer = $("#notifications");
    var notifications = user.notifications;
    for (i in notifications){
        var not = '<div class="notification" id="notification' + i + '">' +
                '<span class="title">' + notifications[i].title + '</span>' +
                '<span class="body">' + notifications[i].body + '</span>' +
                '<input type="button" value="X" class="deleteNotification" onclick="deleteNotification(' + user.id + ','+ i + ')">' +
                '</div>';

        notificationContainer.append(not);
    }
}

function deleteNotification(userID, notID){
    server.deleteNotification(userID, notID,function(){
        $("#notification" + notID).hide();
        notificationsScrollerApi.reinitialise();
    }, function(){
        alert('error deleting notification');
    })

}
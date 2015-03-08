/**
 * Created by Pavel on 06/03/2015.
 */

function updateUserCard(user){
    loadUserImage(user);
    loadUserDetails(user);
    loadRanks(user.ranking.driver, "driver");
    loadRanks(user.ranking.rider, "rider");

}

function loadUserImage(user){
    var image = user.publicData.image;
    if(image == null) {
        image = serverUrl + '/Images/jhonDo.jpg';
    }

    $("#userImg").css("background-image", 'url("' + image + '")');
}
function loadUserDetails(user){
    $("#userName").append(user.publicData.name);
    $("#userLastName").append(user.publicData.lastName);
    $("#email .detail2").append(user.privateData.email);
    $("#phone .detail2").append(user.privateData.phone);
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
/**
 * Created by Alex on 3/3/2015.
 */
/**
 * Created by Alex on 3/2/2015.
 */

$(document).ready(function() {

    $(".publishPostRide").append(addPostDetails());
});

//function changeToPublishRide(){
//            $(".myRides").slideUp(700);
//    $(".publishPostRide").append(addPublishDetails());
//    $(".publishPostRide").show();
//}

function addPostDetails(){
    return "" +
        '<div class="publishPostRide container">'+
        '<div class="publishPostRideHeader">'+
        'Post New Request'+
        '</div>'+
        '<div class="publishPostContent">'+
        '<p class="label">'+
        '<span class="text">From :</span>'+
        '<input type="text" class="inputText" style="margin-top: 50px"/>'+
        '</p>'+
        '<p class="label">'+
        '<span class="text">To :</span>'+
        '<input type="text" class="inputText" style="margin-bottom: 50px"/>'+
        '</p>'+
        '<p class="label">'+
        '<span class="text">Date :</span>'+
        '<input type="date" class="inputText dateInput" style="margin-top: 50px"/>'+
        '</p>'+
        '<p class="label">'+
        '<span class="text">From Time :</span>'+
        '<input type="time" class="inputText timeInput" />'+
        '</p>'+
        '<p class="label">'+
        '<span class="text">To Time:</span>'+
        '<input type="time" class="inputText timeInput" />'+
        '</p>'+
        '<p class="label">'+
        '<input type="button" class="publishPostButton btn" value="Post"/>'+
        '</p>'+
        '</div>'+
        '</div>'
}

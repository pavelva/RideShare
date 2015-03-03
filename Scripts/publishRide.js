/**
 * Created by Alex on 3/2/2015.
 */

$(document).ready(function() {
    $("#publishPostRide").append(addPublishDetails());

    $('main').jScrollPane({
            verticalGutter: 0
        }
    );

    //alert($("#publishPostRide").height());

});

//function changeToPublishRide(){
//    $(".publishPostRide").append(addPublishDetails());
//    $(".publishPostRide").show();
//}

function addPublishDetails(){
    return "" +
        '<div class="publishPostRideHeader">'+
                'Publish New Ride'+
        '</div>'+
        '<div id="publishPostContent">'+
            '<p class="label">'+
                '<span class="text">From :</span>'+
                '<input type="text" class="inputText" />'+
            '</p>'+
            '<p class="label">'+
                '<span class="text">To :</span>'+
                '<input type="text" class="inputText" />'+
            '</p>'+
            '<p class="label">'+
                '<span class="text">Stopover :</span>'+
                '<input type="text" class="inputText"/>'+
                '<input type="button" class="submitButton btn" value="+"/>'+
            '</p>'+
            '<p class="label">'+
                '<output class="outPutText" /></output>'+
            '</p>' +
            '<p class="label">'+
                '<span class="text">Date :</span>'+
                '<input type="date" class="inputText dateInput" />'+
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
                '<input type="button" class="publishPostButton btn" value="Publish"/>'+
            '</p>'+
        '</div>'
}
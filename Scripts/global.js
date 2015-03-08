﻿var serverUrl = "http://localhost:63342/RideShare/"

var pages = {
    myRides: {
        navigatorID: 'aMyRides',
        containerID: 'myRides',
        loadFunction: function(){
            $('main').jScrollPane({
                    verticalGutter: 0
                }
            );
        }
    },
    publishRide: {
        navigatorID: 'aPublishRide',
        containerID: 'publishPostRide',
        loadFunction: function(){}
    },
    searchRides: {
        navigatorID: 'aSearchRide',
        containerID: 'searchRides',
        loadFunction: function(){}
    },
    postRequest: {
        navigatorID: 'aPostRequest',
        containerID: 'postRequest',
        loadFunction: function(){}
    }
};

var curPage = pages.myRides;
var user;


$(document).ready(function(){
    $('nav .links').hide();
    $('#userCard').hide();
    $('#notifications *').hide();
    //$('.updatesIcon').hide();
    closeAll();
    //init();
});

$(window).load(function() {
    $('body').queue('load',function(){
        $('nav .links').fadeIn(2000);
        setTimeout(function(){$('body').dequeue('load');},500);

    }).queue('load',function() {
        init();
        $(this).dequeue('load');
    }).queue('load',function(){
        $("#leftAside").animate({width:"310px"},600,function(){
            $('#userCard').fadeIn(200);
        });
        $("#rightAside").animate({width:"23%"},600,function(){
            $('#notifications *').fadeIn(200);
            $('#notifications').jScrollPane({
                    verticalGutter: 0,
                    horizontalGutter: 0
                }
            );
        });
    }).dequeue('load');
});

function init() {
    user = users[0];
    updateUserCard(user);

    var rides = getMyRides(user.publicData.id);
    for (i in rides)
        updateMyRides(rides[i]);
    updateCurrentPage(pages.myRides);

}

function closeAll() {
    for (page in pages) {
        $('#' + pages[page].containerID).hide();
    }

    curPage = pages.postRequest;
}

function logout() {
    window.location = 'login.aspx';
}

function getMyRides(userID) {
    for (i in myRides) {
        if (myRides[i].id == userID) {
            return myRides[i].data;
        }
    }

    alert('No Such MyRides Page For User ID :' + userID);
}

function updateCurrentPage(page) {
    if(curPage == page) {
        return;
    }

    $("main").slideUp(400, function() {
        $('#' + curPage.navigatorID).css("color", "white");
        $('#' + curPage.navigatorID).hover(function(){$(this).css("color", "#0185fd")}, function(){$(this).css("color", "white")});
        $('#' + curPage.containerID).hide();

        curPage = page;
        $('#' + page.navigatorID).css("color", "#edc038");
        $('#' + curPage.navigatorID).unbind("mouseenter mouseleave");
        $('#' + curPage.containerID).show();

        $('main').jScrollPane({
                verticalGutter: 0
            }
        );

        $("main").slideDown(400, curPage.loadFunction);
    });

}

//function unloadCss(page) {
//    var links = document.getElementsByTagName('head')[0].getElementsByTagName('link');
//
//    for (link in links) {
//        if(links[link].id == page.cssID){
//            links[link].disabled = true;
//        }
//    }
//}
//
//function loadCss(page) {
//    var links = document.getElementsByTagName('head')[0].getElementsByTagName('link');
//
//    for (link in links) {
//        if (links[link].id == page.cssID) {
//            links[link].disabled = false;
//        }
//    }
//}
//var serverUrl = 'http://' + location.host + (location.hostname == 'localhost'? '/RideShare/':'');
//"http://localhost:63342/RideShare/";
var serverUrl = 'http://rideshare.apphb.com/';

var pages = {
    myRides: {
        navigatorID: 'aMyRides',
        containerID: 'myRides',
        loadFunction: function(){
            $('main').jScrollPane({
                    verticalGutter: 0
                }
            );
            myRidesScrollerApi = $('main').data('jsp');
            notificationsScrollerApi = $("#notifications").data('jsp');
        }
    },
    publishRide: {
        navigatorID: 'aPublishRide',
        containerID: 'publishRide',
        loadFunction: function(){}
    },
    searchRides: {
        navigatorID: 'aSearchRide',
        containerID: 'searchRide',
        loadFunction: function(){}
    },
    postRequest: {
        navigatorID: 'aPostRequest',
        containerID: 'postRequest',
        loadFunction: function(){}
    }
};


var curPage = pages.myRides;
var popup;
var user;
var myRides;
var server;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}
$(document).ready(function(){
    var userID = getParameterByName('id');
    //alert(serverUrl);
    $('nav .links').hide();
    //$('#userCard').hide();
    //$('#notifications *').hide();
    $('.updatesIcon').hide();
    closeAll();
    //init();

    $.getScript(serverUrl + "Scripts/Stubs/server.js",function(){
        $('body').queue('load',function(){
            $('nav .links').fadeIn(2000);
            setTimeout(function(){$('body').dequeue('load');},500);

        }).queue('load',function() {
            init(userID);

            $('#userCard').hide();
            $('#notifications *').hide();

            $(this).dequeue('load');
        }).queue('load',function(){
            $("#leftAside").animate({width:"23%"},600,function(){
                //$("#leftAside").css({minWidth:"310px"});
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
});

$(window).resize(function(){
    notificationsScrollerApi.reinitialise();
    myRidesScrollerApi.reinitialise();
});


function init(userID) {
    popup = $('#popup');
    popup.click(closePopup);

    user = server.getUser(userID);
    updateUserCard(user);

    initMyRidesPage();
    loadNotifications(user);

    updateCurrentPage(pages.myRides);

}

function closeAll() {
    for (page in pages) {
        $('#' + pages[page].containerID).hide();
    }

    curPage = pages.postRequest;
}

function logout() {
    user = '';
    myRides = '';
    window.location = 'login.html';
}


//function getMyRides(userID) {
//    for (i in myRides) {
//        if (myRides[i].id == userID) {
//            return myRides[i].data;
//        }
//    }
//
//    alert('No Such MyRides Page For User ID :' + userID);
//}

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

function loadPopup(content){
    popup.empty();
    var children, height, width, top, left;

    $.when(popup.append(content)).then(function(){
        children = popup.children();
        height = children.height();
        width = children.width();
        top = children.css('top');
        left = children.css('left');
        children.css({'height' : '0', 'width' : '0', 'top' : '40%' , 'left' : '50%'});
        popup.children().click(function(e){return false;});
        children.children().hide();
    }).then(function(){
        popup.fadeIn(200);
    }).then(function(){
        children.animate({
            'width' : width + '%', 'left' : left
        }).animate({
            'height':height + '%', 'top' : top
        });

    }).then(function(){
        setTimeout(function(){
            children.children().fadeIn(50);
        }, 750);
    });
    //popup.append(content).done(function(){alert(1);}).fadeIn(200);
}

function closePopup(){
    popup.fadeOut(200);
}

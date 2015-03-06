var serverUrl = "http://localhost:63342/RideShare/"

var pages = {
    myRides: {
        navigatorID: 'myRides',
        containerClass: 'myRides',
        cssID: 'cssMyRides'
    },
    publishRide: {
        navigatorID: 'publishRide',
        containerClass: 'publishRide',
        cssID: 'cssPublishRide'
    },
    searchRides: {
        navigatorID: 'searchRides',
        containerClass: 'searchRides',
        cssID: 'cssSearchRides'
    },
    postRequest: {
        navigatorID: 'postRequest',
        containerClass: 'postRequest',
        cssID: 'cssPostRequest'
    }
};

var curPage = pages.myRides;
var user;

$(document).ready(function(){
    //init();
    user = users[0];
    updateUserCard(user);
    var rides = getMyRides(user.publicData.id);
    for (i in rides)
        updateMyRides(rides[i]);
    //updateCurrentPage(pages.myRides);

    $('main').jScrollPane({
            verticalGutter: 0
        }
    );

    //$("#leftAside").animate({width:"16%"},600,function(){
    //    $("#leftAside").css("min-width","290px");
    //});
    //
    //$("#rightAside").animate({width:"23%"},600,function(){
    //    $('main').slideDown(700);
    //});
});

function init() {
    jQuery.each(pages, function () {
        unloadCss(this);
    });

    for (page in pages) {
        $('.' + pages[page].containerClass).css('display', 'none');
    }
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

    $('#' + curPage.navigatorID).css("color", "#2a3c4e");
    $('.' + curPage.containerClass).css("display", "none");
    unloadCss(curPage);

    curPage = page;
    loadCss(curPage);
    $('#' + page.navigatorID).css("color", "#8b96a0");
    $('.' + curPage.containerClass).css("display", "block");
}

function unloadCss(page) {
    var links = document.getElementsByTagName('head')[0].getElementsByTagName('link');

    for (link in links) {
        if(links[link].id == page.cssID){
            links[link].disabled = true;
        }
    }
}

function loadCss(page) {
    var links = document.getElementsByTagName('head')[0].getElementsByTagName('link');

    for (link in links) {
        if (links[link].id == page.cssID) {
            links[link].disabled = false;
        }
    }
}
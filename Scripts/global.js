var serverUrl = "http://localhost:63342/RideShare/"

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
    init();

    user = users[0];
    updateUserCard(user);
    var rides = getMyRides(user.publicData.id);
    for (i in rides)
        updateMyRides(rides[i]);
    updateCurrentPage(pages.myRides);

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
    for (page in pages) {
        $('#' + pages[page].containerID).hide();
    }

    curPage = pages.searchRides;
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
        $('#' + curPage.containerID).hide();

        curPage = page;
        $('#' + page.navigatorID).css("color", "#edc038");
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
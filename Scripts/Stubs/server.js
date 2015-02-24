//var server = {
//    login: function (userName, password) {
//        $.getScript("Scripts/Stubs/users.js", function () {
//            alert(users[0].id);
//            return 1111;
//        });
//    }
//};

//var server = {
//    login: function (user, password) {
//        return $.getScript("Scripts/Stubs/users.js").done(function () {
//            alert('userID: ' + users[0].publicData.id);
//            return users[0].publicData.id;
//        }).fail(function(){alert('fail');});
//    }
//}

$.getScript("Scripts/Stubs/users.js");
$.getScript("Scripts/Stubs/data.js");

var server = {
    login: function (userID, password) {
        for (index in users) {
            var user = users[index];
            if (userID == user.privateData.email && user.privateData.password) {
                return user.publicData.id;
            }
        }

        return 0;
    }
}
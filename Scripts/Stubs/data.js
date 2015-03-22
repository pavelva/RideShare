var rides = [
    {
        status: 'Done',
        id: '1111',
        driver: 'Avi Moshe',
        driverID: 1,
        date: '10/12/2015',
        fromTime: '19:00',
        toTime: '23:00',
        riders: [
            {
                name: users[1].publicData.name,
                lastName: users[1].publicData.lastName,
                id: users[1].publicData.id,
                ranked: false
            },
            {
                name: users[3].publicData.name,
                lastName: users[3].publicData.lastName,
                id: users[3].publicData.id,
                ranked: false
            }],
        from: "Beer Sheva",
        to: "Haifa",
        stops: ["Beit Kama", " Road 6", "Yokneam"]
    },
    {
        status: 'Open',
        id: '4444',
        driver: 'Avi Moshe',
        driverID: 1,
        date: '10/01/2015',
        fromTime: '19:00',
        toTime: '21:00',
        riders: [],
        from: "Haifa",
        to: "Kiryat Shmona",
        stops: []
    },
    {
        status: 'Open',
        id: '2222',
        driver: 'Arnold Schwarzenegger',
        driverID: 3,
        date: '10/11/2015',
        fromTime: '19:00',
        toTime: '21:00',
        riders: [
            {
                name: users[0].publicData.name,
                lastName: users[0].publicData.lastName,
                id: users[0].publicData.id
            }],
        from: "Beer Sheva",
        to: "Krayot",
        stops: []
    },
    {
        status: 'Done',
        id: '3333',
        driver: 'Dana Modan',
        driverID: 7,
        date: '11/01/2015',
        fromTime: '19:00',
        toTime: '21:00',
        riders: [
            {
                name: users[0].publicData.name,
                lastName: users[0].publicData.lastName,
                id: users[0].publicData.id,
                ranked: true
            },
            {
                name: users[8].publicData.name,
                lastName: users[8].publicData.lastName,
                id: users[8].publicData.id,
                ranked: false
            },
            {
                name: users[6].publicData.name,
                lastName: users[6].publicData.lastName,
                id: users[6].publicData.id,
                ranked: false
            }],
        from: "Beer Sheva",
        to: "Metula",
        stops: []
    },
    {
        status: 'Done',
        id: '5555',
        driver: 'Sara Netanyahu',
        driverID: 8,
        date: '11/01/2015',
        fromTime: '19:00',
        toTime: '21:00',
        riders: [
            {
                name: users[4].publicData.name,
                lastName: users[4].publicData.lastName,
                id: users[4].publicData.id,
                ranked: true
            },
            {
                name: users[5].publicData.name,
                lastName: users[5].publicData.lastName,
                id: users[5].publicData.id,
                ranked: false
            },
            {
                name: users[8].publicData.name,
                lastName: users[8].publicData.lastName,
                id: users[8].publicData.id,
                ranked: false
            }],
        from: "Beer Sheva",
        to: "Tel Aviv",
        stops: []
    }
]


//{id:data}
var myRidesData = {
    1: [
        {
            type: 'Ride',
            rideDetails: rides[0]
        },
        {
            type: 'Request',
            status: 'Open',
            id: '1111',
            rideDetails: rides[2],
            ranked: false
        },
        {
            type: 'Request',
            status: 'Done',
            id: '2222',
            rideDetails: rides[3],
            ranked: false
        },
        {
            type: 'Ride',
            rideDetails : rides[1]
        },
        {
            type: 'Request',
            status: 'Done',
            id: '3333',
            rideDetails: rides[4],
            ranked: false
    }],
    2: [],
    3: [
        {
            type: 'Ride',
            rideDetails: rides[2]
        }
    ],
    7:[
        {
            type: 'Ride',
            rideDetails: rides[3]
        }
    ],
    8: [
        {
            type: 'Ride',
            rideDetails: rides[4]
        }
    ]
};




//var myRides =
//    [{
//        id: 1,
//        data: [
//            {
//                type: 'Ride',
//                status: 'Done',
//                id: '1111',
//                driver: 'Avi Moshe',
//                driverID: 1,
//                date: '10/12/2015',
//                fromTime: '19:00',
//                toTime: '23:00',
//                riders: [
//                    {
//                        name: users[1].publicData.name,
//                        lastName: users[1].publicData.lastName,
//                        id: users[1].publicData.id,
//                        ranked: false
//                    },
//                    {
//                        name: users[3].publicData.name,
//                        lastName: users[3].publicData.lastName,
//                        id: users[3].publicData.id,
//                        ranked: false
//                    }],
//                from: "Beer Sheva",
//                to: "Haifa",
//                stops:["Beit Kama", " Road 6", "Yokneam"]
//            },
//            {
//                type: 'Request',
//                status: 'Open',
//                id: '2222',
//                driver: 'Arnold Schwarzenegger',
//                driverID: 3,
//                date: '10/11/2015',
//                fromTime: '19:00',
//                toTime: '21:00',
//                riders: [
//                    {
//                        name: users[0].publicData.name,
//                        lastName: users[0].publicData.lastName,
//                        id: users[0].publicData.id
//                    }],
//                from: "Beer Sheva",
//                to: "Krayot",
//                ranked: false
//            },
//            {
//                type: 'Request',
//                status: 'Done',
//                id: '3333',
//                driver: 'Dana Modan',
//                driverID: 7,
//                date: '11/01/2015',
//                fromTime: '19:00',
//                toTime: '21:00',
//                riders: [
//                    {
//                        name: users[0].publicData.name,
//                        lastName: users[0].publicData.lastName,
//                        id: users[0].publicData.id,
//                        ranked: true
//                    },
//                    {
//                        name: users[8].publicData.name,
//                        lastName: users[8].publicData.lastName,
//                        id: users[8].publicData.id,
//                        ranked: false
//                    },
//                    {
//                        name: users[6].publicData.name,
//                        lastName: users[6].publicData.lastName,
//                        id: users[6].publicData.id,
//                        ranked: false
//                    }],
//                from: "Beer Sheva",
//                to: "Metula",
//                ranked: false
//            },
//            {
//                type: 'Ride',
//                status: 'Open',
//                id: '4444',
//                driver: 'Avi Moshe',
//                driverID: 1,
//                date: '10/01/2015',
//                fromTime: '19:00',
//                toTime: '21:00',
//                riders: [],
//                from: "Haifa",
//                to: "Kiryat Shmona",
//                stops:[]
//            },
//            {
//                type: 'Request',
//                status: 'Done',
//                id: '5555',
//                driver: 'Sara Netanyahu',
//                driverID: 8,
//                date: '11/01/2015',
//                fromTime: '19:00',
//                toTime: '21:00',
//                riders: [
//                    {
//                        name: users[4].publicData.name,
//                        lastName: users[4].publicData.lastName,
//                        id: users[4].publicData.id,
//                        ranked: true
//                    },
//                    {
//                        name: users[5].publicData.name,
//                        lastName: users[5].publicData.lastName,
//                        id: users[5].publicData.id,
//                        ranked: false
//                    },
//                    {
//                        name: users[8].publicData.name,
//                        lastName: users[8].publicData.lastName,
//                        id: users[8].publicData.id,
//                        ranked: false
//                    }],
//                from: "Beer Sheva",
//                to: "Tel Aviv",
//                ranked: false
//            }]
//    },
//        {
//            id: 2,
//            data: []
//        },
//        {
//            id: 3,
//            data: {
//                type: 'Ride',
//                status: 'Done',
//                id: '4444',
//                driver: 'Dana Modan',
//                driverID: 7,
//                date: '11/01/2015',
//                fromTime: '19:00',
//                toTime: '21:00',
//                riders: [
//                    {
//                        name: users[0].publicData.name,
//                        lastName: users[0].publicData.lastName,
//                        id: users[0].publicData.id,
//                        ranked: true
//                    },
//                    {
//                        name: users[8].publicData.name,
//                        lastName: users[8].publicData.lastName,
//                        id: users[8].publicData.id,
//                        ranked: false
//                    },
//                    {
//                        name: users[6].publicData.name,
//                        lastName: users[6].publicData.lastName,
//                        id: users[6].publicData.id,
//                        ranked: false
//                    }],
//                from: "Beer Sheva",
//                to: "Metula",
//                stops:[]
//            }
//        }
//    ];

var currentDay = $("#currentDay");
var nine = $("#9AM");
var ten = $("#10AM");
var eleven = $("#11AM");
var twelve = $("#12PM");
var one = $("#1PM");
var two = $("#2PM");
var three = $("#3PM");
var four = $("#4PM");
var five = $("#5PM");

currentDay.text(moment().format('dddd MMMM Do, YYYY'));

var checkNine = function() {
    var start = moment().hour(9);
    var end = moment().hour(9).minute(59);

    if (moment() <  start) {
        $(nine).addClass("future");
    } else if (moment() > end) {
        $(nine).addClass("past");
    } else if (moment() <= end) {
        $(nine).addClass("present");
    }
}

var checkTen = function() {
    var start = moment().hour(10);
    var end = moment().hour(10).minute(59);

    if (moment() <  start) {
        $(ten).addClass("future");
    } else if (moment() > end) {
        $(ten).addClass("past");
    } else if (moment() <= end) {
        $(ten).addClass("present");
    }
}

var checkEleven = function() {
    var start = moment().hour(11);
    var end = moment().hour(11).minute(59);

    if (moment() <  start) {
        $(eleven).addClass("future");
    } else if (moment() > end) {
        $(eleven).addClass("past");
    } else if (moment() <= end) {
        $(eleven).addClass("present");
    }
}

var checkTwelve = function() {
    var start = moment().hour(12);
    var end = moment().hour(12).minute(59);

    if (moment() <  start) {
        $(twelve).addClass("future");
    } else if (moment() > end) {
        $(twelve).addClass("past");
    } else if (moment() <= end) {
        $(twelve).addClass("present");
    }
}

var checkOne = function() {
    var start = moment().hour(13);
    var end = moment().hour(13).minute(59);

    if (moment() <  start) {
        $(one).addClass("future");
    } else if (moment() > end) {
        $(one).addClass("past");
    } else if (moment() <= end) {
        $(one).addClass("present");
    }
}

var checkTwo = function() {
    var start = moment().hour(14);
    var end = moment().hour(14).minute(59);

    if (moment() <  start) {
        $(two).addClass("future");
    } else if (moment() > end) {
        $(two).addClass("past");
    } else if (moment() <= end) {
        $(two).addClass("present");
    }
}

var checkThree = function() {
    var start = moment().hour(15);
    var end = moment().hour(15).minute(59);

    if (moment() <  start) {
        $(three).addClass("future");
    } else if (moment() > end) {
        $(three).addClass("past");
    } else if (moment() <= end) {
        $(three).addClass("present");
    }
}

var checkFour = function() {
    var start = moment().hour(16);
    var end = moment().hour(16).minute(59);

    if (moment() <  start) {
        $(four).addClass("future");
    } else if (moment() > end) {
        $(four).addClass("past");
    } else if (moment() <= end) {
        $(four).addClass("present");
    }
}

var checkFive = function() {
    var start = moment().hour(17);
    var end = moment().hour(17).minute(59);

    if (moment() <  start) {
        $(five).addClass("future");
    } else if (moment() > end) {
        $(five).addClass("past");
    } else if (moment() <= end) {
        $(five).addClass("present");
    }
}

checkNine();
checkTen();
checkEleven();
checkTwelve();
checkOne();
checkTwo();
checkThree();
checkFour();
checkFive();
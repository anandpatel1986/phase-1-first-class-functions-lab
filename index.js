// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {

    return (
        function fareMultiplier(fare) {
        return fare * multiplier;
        }
    )
}


function fareDoubler(fare) {
    const fareDoubled = createFareMultiplier(2)(fare);
    return fareDoubled;
    }

function fareTripler(fare) {
    const fareTripled = createFareMultiplier(3)(fare);
    return fareTripled;
}

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}

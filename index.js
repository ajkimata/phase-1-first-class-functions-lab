// Code your solution in this file!
// define an anonymous function and assigns it to the returnFirstTwoDrivers variable using the const keyword. 
//The slice() method is used to create a new array that contains elements from the original array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
// Array of the two functions we previously defined
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare) {
        return fare * integer;
    };
}
// fareDoubler function
const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3); 

function selectDifferentDrivers(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
}
//Example test selectDifferentDrivers
const drivers = ["Bob", "Dan", "Sarah", "Jane"];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(`First two drivers: ${firstTwoDrivers}`);

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(`Last two drivers: ${lastTwoDrivers}`);

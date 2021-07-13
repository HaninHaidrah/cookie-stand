'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let shops = []
let totals = 0;
let coHours = []
function Shops(name, min, max, avg) {
    this.name = name;
    this.minOfcust = min;
    this.maxOfcust = max;
    this.avgOfcust = avg;
    this.hourlyCust = [];
    this.avCOKKIESHOUR = [];
    shops.push(this);
}


let location1 = new Shops('seattle', 23, 65, 6.3);
let location2 = new Shops('Tokyo', 3, 24, 1.2);
let location3 = new Shops('Dubai', 11, 38, 3.7);
let location4 = new Shops('Paris', 20, 38, 2.3);
let location5 = new Shops('Lima', 2, 16, 4.6);




Shops.prototype.randomCust = function () {

    for (let i = 0; i < hours.length; i++)

        this.hourlyCust[i] = Math.floor((Math.random() * (this.maxOfcust - this.minOfcust)));
    console.log(this.hourlyCust)

}

Shops.prototype.avOfcookies = function () {

    for (let i = 0; i < hours.length; i++)
        // this.avCOKKIESHOUR[i] = Math.floor(this.hourlyCust[i] * this.avgOfcust)
        this.avCOKKIESHOUR.push(Math.floor(this.hourlyCust[i] * this.avgOfcust))
    console.log(this.avCOKKIESHOUR, 'hi')
    coHours.push(this.avCOKKIESHOUR)
}


let headRow = function () {

    let parent = document.getElementById('parent');
    let tableElement = document.createElement('table');
    parent.appendChild(tableElement);
    console.log(tableElement);

    let rawsElement = document.createElement('tr');
    tableElement.appendChild(rawsElement);


    let headElement2 = document.createElement('th');
    rawsElement.appendChild(headElement2);
    headElement2.textContent = ``;

    for (let i = 0; i < hours.length; i++) {

        let headElement = document.createElement('th');
        rawsElement.appendChild(headElement);
        headElement.textContent = `${hours[i]}`;


    }


}

location1.render1 = function () {


    let parent = document.getElementById('parent');
    let tableElement2 = document.createElement('table');
    parent.appendChild(tableElement2);

    let rawsElement2 = document.createElement('tr');
    tableElement2.appendChild(rawsElement2);

    console.log(tableElement2)

    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`



    }
}

location2.render2 = function () {

    // for (let i = 0; i < shops.length; i++) {
    let parent = document.getElementById('parent');
    let tableElement2 = document.createElement('table');
    parent.appendChild(tableElement2);

    let rawsElement2 = document.createElement('tr');
    tableElement2.appendChild(rawsElement2);

    // for (let j = 0; j <= hours.length; j++) {
    console.log(tableElement2)

    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`


        // }
    }
}

location3.render3 = function () {

    // for (let i = 0; i < shops.length; i++) {
    let parent = document.getElementById('parent');
    let tableElement2 = document.createElement('table');
    parent.appendChild(tableElement2);

    let rawsElement2 = document.createElement('tr');
    tableElement2.appendChild(rawsElement2);

    // for (let j = 0; j <= hours.length; j++) {
    console.log(tableElement2)

    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`


        // }
    }
}

location4.render4 = function () {

    // for (let i = 0; i < shops.length; i++) {
    let parent = document.getElementById('parent');
    let tableElement2 = document.createElement('table');
    parent.appendChild(tableElement2);

    let rawsElement2 = document.createElement('tr');
    tableElement2.appendChild(rawsElement2);

    // for (let j = 0; j <= hours.length; j++) {
    console.log(tableElement2)

    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`


        // }
    }
}

location5.render5 = function () {

    // for (let i = 0; i < shops.length; i++) {
    let parent = document.getElementById('parent');
    let tableElement2 = document.createElement('table');
    parent.appendChild(tableElement2);

    let rawsElement2 = document.createElement('tr');
    tableElement2.appendChild(rawsElement2);

    // for (let j = 0; j <= hours.length; j++) {
    console.log(tableElement2)

    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`


        // }
    }
}

let footerRow = function () {

    let parent = document.getElementById('parent');
    let tableElement = document.createElement('table');
    parent.appendChild(tableElement);
    console.log(tableElement);

    let rawsElement = document.createElement('tr');
    tableElement.appendChild(rawsElement);


    let headElement2 = document.createElement('th');
    rawsElement.appendChild(headElement2);
    headElement2.textContent = `totals`;


    for (let i = 0; i < hours.length; i++) {

        for (let j = 0; j < shops.length; j++) {
            for (let k = 0; k < coHours.length; k++) {


                totals += coHours[k]

            }
        }
        let headElement = document.createElement('th');
        rawsElement.appendChild(headElement);
        headElement.textContent = `${totals}`;


    }


}

    location1.randomCust();
    location1.avOfcookies();

    headRow();

    location1.render1();


    location2.randomCust();
    location2.avOfcookies();
    location2.render2();

    location3.randomCust();
    location3.avOfcookies();
    location3.render3();

    location4.randomCust();
    location4.avOfcookies();
    location4.render4();

    location5.randomCust();
    location5.avOfcookies();
    location5.render5();

    footerRow();


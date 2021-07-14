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
    // this.totals=0
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




let parent = document.getElementById('parent');
let tableElement = document.createElement('table');
parent.appendChild(tableElement);
console.log(tableElement);


let headRow = function () {
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

    let headElement = document.createElement('th');
    rawsElement.appendChild(headElement);
    headElement.textContent = `Daily Location Total`;
}

location1.render1 = function () {

    let rawsElement2 = document.createElement('tr');
    tableElement.appendChild(rawsElement2);


    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`



    }

    let finalElement2 = document.createElement('th');
    rawsElement2.appendChild(finalElement2);

}

location2.render2 = function () {

    // for (let i = 0; i < shops.length; i++) {


    let rawsElement2 = document.createElement('tr');
    tableElement.appendChild(rawsElement2);

    // for (let j = 0; j <= hours.length; j++) {
    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`


        // }
    }
    let finalElement2 = document.createElement('th');
    rawsElement2.appendChild(finalElement2);
}

location3.render3 = function () {

    // for (let i = 0; i < shops.length; i++) {
   

    let rawsElement2 = document.createElement('tr');
    tableElement.appendChild(rawsElement2);

    // for (let j = 0; j <= hours.length; j++) {
   
    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`


        // }
    }
    let finalElement2 = document.createElement('th');
    rawsElement2.appendChild(finalElement2);
}

location4.render4 = function () {

    // for (let i = 0; i < shops.length; i++) {

    let rawsElement2 = document.createElement('tr');
    tableElement.appendChild(rawsElement2);

    // for (let j = 0; j <= hours.length; j++) {
    

    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`


        // }
    }
    let finalElement2 = document.createElement('th');
    rawsElement2.appendChild(finalElement2);
}

location5.render5 = function () {

    // for (let i = 0; i < shops.length; i++) {


    let rawsElement2 = document.createElement('tr');
    tableElement.appendChild(rawsElement2);

    // for (let j = 0; j <= hours.length; j++) {

    let dataOfnames = document.createElement('td')
    rawsElement2.appendChild(dataOfnames);
    dataOfnames.textContent = `${this.name}`


    for (let j = 0; j < hours.length; j++) {
        let dataOfhours = document.createElement('td')
        rawsElement2.appendChild(dataOfhours);
        dataOfhours.textContent = `${this.avCOKKIESHOUR[j]}`


        // }
    }
    let finalElement2 = document.createElement('th');
    rawsElement2.appendChild(finalElement2);
}

let footerRow = function () {


    let rawsElement = document.createElement('tr');
    tableElement.appendChild(rawsElement);


    let headElement2 = document.createElement('th');
    rawsElement.appendChild(headElement2);
    headElement2.textContent = `totals`;

          let totoOftot=0;
    for (let i = 0; i < hours.length; i++) {
        let totals=0;
    
        
        for (let j = 0; j < shops.length; j++) {
        totals+= shops[j].avCOKKIESHOUR[i]; 
        
        totoOftot+=shops[j].avCOKKIESHOUR[i];   
        console.log(totoOftot)
    
        }

        let headElement = document.createElement('th');
        rawsElement.appendChild(headElement);
        headElement.textContent = `${totals}`;  
    }
    let headElement = document.createElement('th');
    rawsElement.appendChild(headElement);
    headElement.textContent = `${totoOftot}`;  

}
for(let i=0;i<shops.length;i++){
shops[i].randomCust();
shops[i].avOfcookies();
}
  
    headRow();

    location1.render1();


   
    location2.render2();

    
    location3.render3();

    // location4.randomCust();
    // location4.avOfcookies();
    location4.render4();

    // location5.randomCust();
    // location5.avOfcookies();
    location5.render5();

    footerRow();


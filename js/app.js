'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let location1 = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    hourlyCust: [],
    avCOKKIESHOUR: [],


    randomcust: function () {

        for (let i = 0; i < hours.length; i++)

            this.hourlyCust[i] = Math.floor((Math.random() * (this.max - this.min)));
    }
    ,
    avOFCOOKIE: function () {
        for (let i = 0; i < hours.length; i++)
            this.avCOKKIESHOUR[i] = Math.floor(this.hourlyCust[i] * this.avg)
        console.log(this.avCOKKIESHOUR);
    }
    ,
    render: function () {

        let parent = document.getElementById('rendering');
        let ulElement = document.createElement('ul');
        console.log(ulElement)
        parent.appendChild(ulElement);

        let h2Element = document.createElement('h2');
        ulElement.appendChild(h2Element);
        h2Element.textContent = `${this.name}`
        let ulElement2 = document.createElement('ul');
        console.log(ulElement)

        for (let i = 0; i < this.hourlyCust.length; i++) {

            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.avCOKKIESHOUR[i]} cookies`;

        }

        this.avCOKKIESHOUR 
        let sum = 0;
        for (let j = 0; j < this.avCOKKIESHOUR.length; j++) {

            sum += this.avCOKKIESHOUR[j];

        }

        let liElement2 = document.createElement('li');
        ulElement.appendChild(liElement2);
        liElement2.textContent=`total : ${sum}`

        console.log(sum);


    }
}
location1.randomcust();
location1.avOFCOOKIE();
location1.render();







let location2 = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    hourlyCust: [],
    avCOKKIESHOUR: [],


    randomcust: function () {

        for (let i = 0; i < hours.length; i++)

            this.hourlyCust[i] = Math.floor((Math.random() * (this.max - this.min)));
    }
    ,
    avOFCOOKIE: function () {
        for (let i = 0; i < hours.length; i++)
            this.avCOKKIESHOUR[i] = Math.floor(this.hourlyCust[i] * this.avg)
        console.log(this.avCOKKIESHOUR);
    }
    ,
    render: function () {

        let parent = document.getElementById('rendering');
        let ulElement = document.createElement('ul');
        console.log(ulElement)
        parent.appendChild(ulElement);

        let h2Element = document.createElement('h2');
        ulElement.appendChild(h2Element);
        h2Element.textContent = `${this.name}`
        let ulElement2 = document.createElement('ul');
        console.log(ulElement)

        for (let i = 0; i < this.hourlyCust.length; i++) {

            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.avCOKKIESHOUR[i]} cookies`;

        }

        this.avCOKKIESHOUR 
        let sum = 0;
        for (let j = 0; j < this.avCOKKIESHOUR.length; j++) {

            sum += this.avCOKKIESHOUR[j];

        }

        let liElement2 = document.createElement('li');
        ulElement.appendChild(liElement2);
        liElement2.textContent=`total : ${sum}`

        console.log(sum);


    }
}
location2.randomcust();
location2.avOFCOOKIE();
location2.render();



let location3 = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    hourlyCust: [],
    avCOKKIESHOUR: [],


    randomcust: function () {

        for (let i = 0; i < hours.length; i++)

            this.hourlyCust[i] = Math.floor((Math.random() * (this.max - this.min)));
    }
    ,
    avOFCOOKIE: function () {
        for (let i = 0; i < hours.length; i++)
            this.avCOKKIESHOUR[i] = Math.floor(this.hourlyCust[i] * this.avg)
        console.log(this.avCOKKIESHOUR);
    }
    ,
    render: function () {

        let parent = document.getElementById('rendering');
        let ulElement = document.createElement('ul');
        console.log(ulElement)
        parent.appendChild(ulElement);

        let h2Element = document.createElement('h2');
        ulElement.appendChild(h2Element);
        h2Element.textContent = `${this.name}`
        let ulElement2 = document.createElement('ul');
        console.log(ulElement)

        for (let i = 0; i < this.hourlyCust.length; i++) {

            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.avCOKKIESHOUR[i]} cookies`;

        }

        this.avCOKKIESHOUR 
        let sum = 0;
        for (let j = 0; j < this.avCOKKIESHOUR.length; j++) {

            sum += this.avCOKKIESHOUR[j];

        }

        let liElement2 = document.createElement('li');
        ulElement.appendChild(liElement2);
        liElement2.textContent=`total : ${sum}`

        console.log(sum);


    }
}
location3.randomcust();
location3.avOFCOOKIE();
location3.render();




let location4 = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    hourlyCust: [],
    avCOKKIESHOUR: [],


    randomcust: function () {

        for (let i = 0; i < hours.length; i++)

            this.hourlyCust[i] = Math.floor((Math.random() * (this.max - this.min)));
    }
    ,
    avOFCOOKIE: function () {
        for (let i = 0; i < hours.length; i++)
            this.avCOKKIESHOUR[i] = Math.floor(this.hourlyCust[i] * this.avg)
        console.log(this.avCOKKIESHOUR);
    }
    ,
    render: function () {

        let parent = document.getElementById('rendering');
        let ulElement = document.createElement('ul');
        console.log(ulElement)
        parent.appendChild(ulElement);

        let h2Element = document.createElement('h2');
        ulElement.appendChild(h2Element);
        h2Element.textContent = `${this.name}`
        let ulElement2 = document.createElement('ul');
        console.log(ulElement)

        for (let i = 0; i < this.hourlyCust.length; i++) {

            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.avCOKKIESHOUR[i]} cookies`;

        }

        this.avCOKKIESHOUR 
        let sum = 0;
        for (let j = 0; j < this.avCOKKIESHOUR.length; j++) {

            sum += this.avCOKKIESHOUR[j];

        }

        let liElement2 = document.createElement('li');
        ulElement.appendChild(liElement2);
        liElement2.textContent=`total : ${sum}`

        console.log(sum);


    }
}
location4.randomcust();
location4.avOFCOOKIE();
location4.render();



let location5 = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    hourlyCust: [],
    avCOKKIESHOUR: [],


    randomcust: function () {

        for (let i = 0; i < hours.length; i++)

            this.hourlyCust[i] = Math.floor((Math.random() * (this.max - this.min)));
    }
    ,
    avOFCOOKIE: function () {
        for (let i = 0; i < hours.length; i++)
            this.avCOKKIESHOUR[i] = Math.floor(this.hourlyCust[i] * this.avg)
        console.log(this.avCOKKIESHOUR);
    }
    ,
    render: function () {

        let parent = document.getElementById('rendering');
        let ulElement = document.createElement('ul');
        console.log(ulElement)
        parent.appendChild(ulElement);

        let h2Element = document.createElement('h2');
        ulElement.appendChild(h2Element);
        h2Element.textContent = `${this.name}`
        let ulElement2 = document.createElement('ul');
        console.log(ulElement)

        for (let i = 0; i < this.hourlyCust.length; i++) {

            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.avCOKKIESHOUR[i]} cookies`;

        }

        this.avCOKKIESHOUR 
        let sum = 0;
        for (let j = 0; j < this.avCOKKIESHOUR.length; j++) {

            sum += this.avCOKKIESHOUR[j];

        }

        let liElement2 = document.createElement('li');
        ulElement.appendChild(liElement2);
        liElement2.textContent=`total : ${sum}`

        console.log(sum);


    }
}
location5.randomcust();
location5.avOFCOOKIE();
location5.render();
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const Car = {
    type: 'Sedan',
    make: 'Honda',
    color: 'White',
    oil_level: 80,
    oilChange: function() {
        if(this.oil_level > 40){
            return `The ${this.color} ${this.make} does not need mantinence`;
        }else {
            return `Go to Mechanic`;
        }
    }
};

console.log(Car.oilChange());

// Principle 3

// code example for New Binding
function Store(items) {
    this.name = 'Walmart',
    this.type = 'Department Store',
    this.item = function() {
        if (items > 5000000) {
            return `${this.type}: Stocked`;
        } else {
            return `${this.type}: Empty`;
        }
    }
}

const walMart = new Store(100000000);

console.log(walMart.item());
// Principle 4

// code example for Explicit Binding
const basketBall = {
    teams: 2,
    players: 10,
    arenaCity: 'Miami'
}

function gamePlayed() {
    console.log(`The ${this.teams} teams played with ${this.players} players in ${this.arenaCity}`);
}

gamePlayed.call(basketBall);
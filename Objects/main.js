/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Test',
    age: 2021 - 1990,
    job: 'Teacher',
    friends: ['bob','tom']
}

console.log(jonas)

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What info would you like about Jonas');


if (jonas[interestedIn]) { 
    console.log(jonas[interestedIn]);
} else {
    console.log('Does not exist');
}

jonas.location = 'bangaldesh';
jonas['twitter'] = '@something';

console.log(jonas)

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' Friends and his best friend is ' + jonas.friends[0]);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
*/

const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const John = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
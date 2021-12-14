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

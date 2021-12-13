function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} peice of apples and ${orangePieces} ornages.`
    return juice;
}

console.log(fruitProcessor(2,3));


const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirement(1996, 'Alamin'));
console.log(yearsUntilRetirement(1950, 'Mike'));


const calcAge1 = birthYear => 2021 - birthYear;
console.log(calcAge1(1996));


const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins,avgKoalas){
    if (avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins have won (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas have won (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No One Wins');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
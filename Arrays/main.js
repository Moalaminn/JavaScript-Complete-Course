/*
const tips = [125,555,44];

function calculateTip(billValue){

    const total = [];
    if (billValue >= 50 && billValue < 300){
        const tip = billValue / 100 * 15;
        total.push(tip);
    } else {
        const tip = billValue / 100 * 20;
        total.push(tip);
    }

    console.log(total);
}

calculateTip(500);


const calcTip = function(bill) {
    return bill >= 50 && bill <= 3000 ? bill * 0.15 : bill * 0.2;
}

const calcTip2 = bill => bill >= 50 && bill <= 3000 ? bill * 0.15 : bill * 0.2;

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]];



console.log(bills,tips,totals);



// Looping Arrays, breaking and continuing

const jonas = ['Jonas',
    'Test',
    24,
    'Teacher',
    ['bob','tom','dad']
]

for (let i = 0; i < jonas.length; i++){
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
} 

for (let i = 0; i < jonas.length; i++){
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

for (let i = jonas.length -1; i >= 0; i--){
    console.log(jonas[i])
}
*/

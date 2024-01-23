[id , brand , model , type , pricePerDay, available]
Let carBooking =[
        [1,’Toyota’, ‘Corolla’ , ‘Sedan’ ,50 ,10],
        [2,’Honda’, ‘Civic’ , ‘Sedan’ ,55 ,8],
        [3,’Ford’, ‘Mustang’ , ‘Sports Car’ ,80 ,5],
        [4,’Jeep’, ‘Wrangler’ , ‘SUV’ ,70 ,7],
        [5,’Nissan’, ‘Altima’ , ‘Sedan’ ,45 ,12]
];
function getEngineNumber(str) {
    let numberPlate = str.split('');
    let engineNum = 0; 
    for(let digit of numberPlate) {
        if(Number.isInteger(parseInt(digit))) {
            engineNum += parseInt(digit);
        }
    }

    return engineNum;
}

console.log(getEngineNumber('HR05-AA-2669')); // 28
console.log(getEngineNumber('HR09-AA-1119')); // 21
console.log(getEngineNumber('HR00-AA-1337')); // 14

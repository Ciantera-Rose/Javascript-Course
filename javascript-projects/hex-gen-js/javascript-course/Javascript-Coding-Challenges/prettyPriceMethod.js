//prettyPrice(3.50, 0.95) // 3.95
//prettyPrice(3.32, 0.95) // 3.95
//prettyPrice(100, 0.95) // 100.95

const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
       var extension = extension * 0.01
    }
    return Math.floor(grossPrice) + extension;
}


Math.floor(3.50); //? 3
Math.floor(10); //? 10

prettyPrice(3.42, 0.90) //? 3.99
prettyPrice(3.42, 0.99) //? 3.99
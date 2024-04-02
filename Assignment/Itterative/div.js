


let inputNumber = 12345;
let reversedNumber = 0;

while (inputNumber > 0) {
    reversedNumber = (reversedNumber * 10) + (inputNumber % 10);
    inputNumber = Math.floor(inputNumber / 10);

console.log("Reversed number:", reversedNumber);
	console.log("Original number:", inputNumber);

}


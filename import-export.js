//bootstrap file
import navigation, { greeting, multiply } from './navigation';

console.log(greeting);
console.log(multiply(5, 6));
console.log(navigation());


//nav file
export default function () {
    return '<div>Logo</div>'
}

export function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

export const greeting = 'Hi there';
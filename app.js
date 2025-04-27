// Ex.1-maxOfTwoNumbers()
const maxOfTwoNumbers = (x, y) => {
    if (x >= y){
        return x
    } else {
        return y
    }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Ex.2-isAdult()
const isAdult = (age) => {
    ageGroup = ""
    if (age >= 18) {
        ageGroup = "Adult"
    } else {
        ageGroup = "Minor"
    }
    return ageGroup
}
console.log('Exercise 2 Result:', isAdult(21))

// Ex.3-isCharAVowel()
const isCharAVowel = (char) => {
    char = char.toLowerCase()
    if (char === 'a' || char === 'e' || char === 'o' || char === 'u' || char === 'i') {
        return true
    } else {
        return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

// Ex.4-generateEmail()
const generateEmail = (name, domain) => {
    return name + "@" + domain
}
console.log('Exercise 4 Result:',generateEmail('ahmed', 'gmail.com'))

// Ex.5 greetUser()
const greetUser = (name, dayTime) => {
    return "Good " + dayTime + ", " + name +"!"
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// Ex.6 maxOfThree()
const maxOfThree = (n1, n2, n3) => {
    if (n1 >= n2 && n1 >= n3){
        return n1
    } else if (n2 >= n1 && n2 >= n3){
        return n2
    } else {
        return n3
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// Ex.7-calculateTip()
const calculateTip = (billAmount, tipPercentage) => {
    return billAmount*(tipPercentage/100)
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

// Ex.8-convertTemperature()
const convertTemperature = (temp, tempScaleUnit) => {
    if (tempScaleUnit === 'C') {
        return (temp * 9/5) + 32 + ' (Fahrenheit)'
    } else if (tempScaleUnit === 'F') {
        return (temp - 32) * 5/9 + ' (Celsius)'
    } else {
        return "Wrong Scale Unit"
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// Ex.9-basicCalculator()
const basicCalculator = (num1, num2, opr) => {
    if (opr === 'add'){
        return num1 + num2
    } else if (opr === 'subtract') {
        return num1 - num2
    } else if (opr === 'multiply') {
        return num1 * num2
    } else if (opr === 'divide') {
        return num1 / num2
    } else {
        return "Invalid Operation"
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
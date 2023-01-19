function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(5, 7);
console.log('addTwoNumber exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(3);
console.log('convertHoursToMinutes exercise:', convertHoursToMinutesResult, 'minutes');

function getGreeting(name) {
  return 'Hello ' + name;
}

var getGreetingResult = getGreeting('World');
console.log(getGreetingResult + '!');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(5, 10);
console.log('addAndMultiplyBy5 exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(10, 35);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Meridian', 'Clade');
console.log('getFullName exercise:', getFullNameResult);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('cube exercise:', cubeResult);

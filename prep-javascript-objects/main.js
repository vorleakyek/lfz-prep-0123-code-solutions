var person = {
  firstName: 'Jaeger',
  lastName: 'Claude',
  hobby: 'Traveling'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The character name is:', fullName + '.');

person.job = 'Explorer';
console.log('He is an', person.job, 'in the Strange World Disney movie.');

person.previousJob = 'Aventurer';
console.log('He was also an', person.previousJob + '.');

console.log('The complete person object:', person);

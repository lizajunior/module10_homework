function printInfo(){
  console.log(`name:${this.name}, age:${this.age}`);
}
const person = {
  name:'katea',
  age: 24
};
printInfo.call(person);
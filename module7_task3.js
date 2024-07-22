const users = [
  {name:'Sasha', age:21},
  {name:'Dasha', age:18},
  {name:'Masha', age:15},
  {name:'Pasha', age:19}
]

const newUsers = users.filter(x => x.age >= 18);
console.log(newUsers);
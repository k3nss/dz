----------имена и фамилии богатырей----------
const bogatiri = [
  {id: 0, firstName: 'Ilya', lastName: 'Muromets', age: 58},
  {id: 1, firstName: 'Alyosha', lastName: 'Popovich', age: 55},
  {id: 2, firstName: 'Dobrinya', lastName: 'Nicitich', age: 53}
];

const name = bogatiri.map(({firstName, lastName}) => ({firstName, lastName}))
console.log(name)

----------элементы массива с возрастом больше 30----------
const bogatiri = [
  {id: 0, firstName: 'Ilya', lastName: 'Muromets', age: 58},
  {id: 1, firstName: 'Alyosha', lastName: 'Popovich', age: 55},
  {id: 2, firstName: 'Dobrinya', lastName: 'Nicitich', age: 53}
];

const result = bogatiri.filter((item) => item.age >= 30);
console.log(result)

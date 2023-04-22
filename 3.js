----------имена и фамилии богатырей----------
'use strict'

const bogatiri = [
    {id: 0, firstName: 'Ilya', lastName:'Mutomets', age: 58},
    {id: 1, firstName: 'Alyosha', lastName: 'Popovich', age: 55},
    {id: 2, firstName: 'Dobrinya', lastName: 'Nicitich', age: 23}
]

const result = bogatiri
.map(({firstName, lastName}) => ' Имя: ' + firstName + '.' + ' Фамилия: ' + lastName)
.join(',')

console.log(result)


----------элементы массива с возрастом больше 30----------
const bogatiri = [
  {id: 0, firstName: 'Ilya', lastName: 'Muromets', age: 58},
  {id: 1, firstName: 'Alyosha', lastName: 'Popovich', age: 55},
  {id: 2, firstName: 'Dobrinya', lastName: 'Nicitich', age: 53}
];

const result = bogatiri.filter((item) => item.age >= 30);
console.log(result)

--------------------------------------
'use strict'

const bogatiri = [
    {id: 0, firstName: 'Ilya', lastName:'Mutomets', age: 58},
    {id: 1, firstName: 'Alyosha', lastName: 'Popovich', age: 55},
    {id: 2, firstName: 'Dobrinya', lastName: 'Nicitich', age: 23}
]

        

const j = bogatiri.every ((a) => (a.age >= 30))

console.log(j)

----------------------------------

'use strict'

const bogatiri = [
    {id: 0, firstName: 'Ilya', lastName:'Mutomets', age: 58},
    {id: 1, firstName: 'Alyosha', lastName: 'Popovich', age: 55},
    {id: 2, firstName: 'Dobrinya', lastName: 'Nicitich', age: 53}
]

const a = bogatiri.map((a) => ({
    ...a, firstName: a.firstName.toUpperCase()
}))

console.log(a)

'use strict'
const car = {
  name: 'Nissan',
  model: 'Skyline',
  data:{
    year: 1999,
    horsepower: 300
  }
}


const newCar = Object.assign({}, car)
console.log(newCar)

const obj = {
  name: "Ferrari",
  model: "LaFerrari",
  color: "Red"
}

function getFullName(mileage){
  return this.name + " " + this.model + " " + this.color + "." + " Пробег - " + mileage
}

getFullName.apply(obj, [14455])

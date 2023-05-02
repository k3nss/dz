class User{
  constructor(name, surname){
    this.name = name
    this.surname = surname
  }
    getFullName(){
    return this.name + ' ' + this.surname
  }
}

class UserAdress extends User{
  constructor(adress, name, surname){
    super(name,surname)
    this.adress = adress
  }
    getFullName(){
    return 'Ваше имя - ' + this.name + ' ' + this.surname + '. Ваш адрес - город ' + this.adress
  }
}

const user = new UserAdress('Казань', 'Иван', 'Иванов')
alert(user.getFullName())

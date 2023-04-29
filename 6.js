class User{
  name = 'Ivan'
  surname = 'Ivanov'  
    getFullName(){
    return this.name + ' ' + this.surname
  }
}

class UserAdress extends User{
  city = 'Kazan'
    getFullName(){
    return 'Ваше имя - ' + this.name + ' ' + this.surname + '. Ваш адрес - город ' + this.city
  }
}

const user = new UserAdress()
alert(user.getFullName())

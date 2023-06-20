function calc(a,b,c){
    if (b === '+'){
        return a + c
    } if(b === '*'){
        return a * c
    } if (b === '/'){
        return a / c
    } if (b === '-'){
        return a - c
    }
}

const s = calc(14, '/', 5)
console.log(s)

module.exports = a
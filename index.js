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

module.exports = calc;

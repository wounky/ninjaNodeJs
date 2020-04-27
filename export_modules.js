var pi = 3.146

var adder = function(a,b){
    return a+b
}

//array = ['Tam','Katie','Ann']
var arrLength = function(array){
    return array.length
}

var arrLengthPlusPie = function(array){
    return adder(arrLength(array), pi)
}

// Call function
//console.log(arrLengthPlusPie(array))

module.exports = {arrLengthPlusPie, pi}
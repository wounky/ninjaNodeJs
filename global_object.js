
/*
setTimeout(function(){
    console.log('3 seconds have passed')
},2000)
*/

var time = 0

// Every time add 2
var timer = setInterval(function(){
    time += 1
    console.log(`${time} seconds have passed`)
    if(time >= 5){
        clearInterval(timer)
    }
}, 1000)

console.log(__filename)
console.log(__dirname)
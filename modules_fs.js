var fs = require('fs')


// Synchronous mode
var readMe = fs.readFileSync('readMe.txt', 'utf8')
var synscWriter = fs.writeFileSync('writeMe.txt', readMe)


// Async mode - callback function is required when a process is complete
var readAndWrite = fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeAsyncMe.txt', data, function(err){
        if(err) throw err
    } )
})
//fs.writeFile('writeMe.txt', readMe)

var remove = function(){
    fs.unlink('./stuff2/writeMeNewDir.txt', function(err){
        if(err) throw err
    })
}

//remove()

// Manage directories in sync mode
var manageDirSync = function(dirName, option){
    if(option = 'rm'){
        fs.rmdirSync(dirName)
    }
    else if(option = 'add'){
        fs.mkdirSync(dirName)
    }
}

// Sample function call
// manageDirSync('./stuff/_container1', 'rm')s
// manageDirSync('./stuff2', 'rm')

// Manage directories in sync mode
/*
fs.mkdir('stuff2',function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff2/writeMeNewDir.txt', data, function(err){
            if(err) throw err
        })
    })
})
*/

fs.rmdir('stuff2',function(){
})
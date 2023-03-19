const asyncFunc = function(text, time, callback){
    setTimeout(function(){
        console.log(text)
        callback()
    }, time)
    }
    
    asyncFunc("task1",1000,function(){
        asyncFunc("task2")
    })
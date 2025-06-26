const aPromise = current => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(current){
                resolve("Promise run successfully");
            }else{
                reject("Something went wrong");
            }
        }, 1000);
    });
}

aPromise(true).then(res =>{
    return res + ". ha ha ha."
}).then(res => {
    setTimeout(() => {
        console.log(res);
    }, 1000)
    return res + " ho ho ho"
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

console.log("Hello World");
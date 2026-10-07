
 const promise = new Promise((resolve, reject) => {
    let isFlag = true;

    if (isFlag) {
        resolve("your pizza is ready");
    } else {
        reject("your pizza is not ready");
    }
});

promise
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    });




function getdata(){
    return(
        new Promise((resolve, reject) => {
        reject("Unable to access data")
    })
    )
    
}

async function getPromise(){
    const data = await getdata()
    console.log(data)
}
getPromise()
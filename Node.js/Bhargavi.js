// Task is to create a promise and implement that promise by any method 
// of your choice.Task

const promise = new Promise((res,rej)=>{
    let success = false

    if(success){
        // json data in response.
        data = [
            {
                name: "Bhargavi",
                batch: "43",
                course: "FSD"
            }, 
            {
                name: "Adarsh",
                batch: "54",
                course: "FSD"
            }
        ]
        res(data) 
    }
    else{
         rej("Failed");
    }
})

promise.then(()=>{
 console.log("Successful");
}).catch((err)=>{
    console.log("Fail");
})


function outer(){
    let say="hello"
     function inner(){
        console.log(say)
     }
     return inner
}
const result = outer()
result()
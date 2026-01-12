function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login")
            resolve()
        },2000);
    })
}

function userDetail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("userdetails")
            resolve()
            
        },1000);
    })
}

login()
    .then(() => {
        return userDetail();
    })
    .then(() => {
        console.log("all task done")
    })
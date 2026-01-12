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

async function demo() {
    try{
        await login();
        await userDetail();
    }catch (error) {
        console.log("error", error)
    }

    console.log("all task done");
}

demo();

//create a 3 task and call it using callback
//promises then async await
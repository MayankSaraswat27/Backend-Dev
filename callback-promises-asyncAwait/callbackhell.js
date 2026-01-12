console.log("first");

function login(cb){
    setTimeout(()=>{
        console.log("login");
        cb()
    },2000);
}

function userDetail(){}

login(()=>{
    setTimeout(()=>{
        console.log("userdetail");
    },1000);
});

console.log("end");
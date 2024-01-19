
log = ()=>{

    let username = uname.value
    let password = pass.value

    if(!username || !password){

        alert("invaild user!!....")
    }

    else{

        localStorage.setItem("uname",username)
        console.log(`username:${username},password:${password}`);
        window.location='dash.html'
    }

}

console.log("hello");
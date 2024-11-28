var username = "admin"
var password = "admin"
if(username=="admin" && password=="admin"){
    console.log( "welcome super admin")
}
else if(username=="admin" && password=="123"){
    console.log("welcome editor")
}
else if(username=="viewer" && password=="123"){
    console.log("welcome viewer")
}
else if(username=="user" && password=="123"){
    console.log("welcome user ")
}
else{
    console.log("invalid user")
}
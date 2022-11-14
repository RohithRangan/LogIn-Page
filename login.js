function validate()
{
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    if(username=="Rohith"&& password=="3120"){
        alert("login successfully")
        return false
    }
    else{
        alert("login failed")
    }
}
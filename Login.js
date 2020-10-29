function Login()
{
    var user = "Nandhini"
    var password = "123456"
    var user1=document.getElementById("us").value
    var password1=document.getElementById("pa").value

    if(!(user==user1))
    {
        document.getElementById("user").innerHTML="Enter correct UserID"
        return false
    }

    else if(!(password==password1))
    {
        document.getElementById("user").innerHTML="Enter correct Password"
        return false
    }
    else
    {
        document.getElementById("user").innerHTML="Enter correct UserID & Password"
    }
}
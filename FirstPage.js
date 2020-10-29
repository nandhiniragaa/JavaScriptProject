function Validation1()
{
    // FirstName
    var txt =document.getElementById("fname").value
    if(txt.length==0){
        document.getElementById("msg1").innerHTML="<br>"+"FirstName should not be empty"
        return false  
     }
    else if(txt.length<3){
        document.getElementById("msg1").innerHTML="FirstName have more than 3letter"+"<br>"
        return false
    }
    else if(txt.length>15){
        document.getElementById("msg1").innerHTML="FirstName have less than 15letter"+"<br>"
        return false
    }
    // LastName
    var txt1 =document.getElementById("lname").value
    if(txt1.length==0){
        document.getElementById("msg2").innerHTML="LastName should not be empty"+"<br>"
        return false  
     }
    else if(txt1.length<3){
        document.getElementById("msg2").innerHTML="LastName have more than 3letter"+"<br>"
        return false
    }
    else if(txt1.length>15){
        document.getElementById("msg2").innerHTML="LastName have less than 15letter"+"<br>"
        return false
    }
    // PhoneNumber
    var pnum = document.getElementById("ph").value
    if(pnum.length==0){
        document.getElementById("msg3").innerHTML="Phonenumber should have 10 Digits"+"<br>"
        return false
    }
    else if(isNaN(pnum)){
        document.getElementById("msg3").innerHTML="Phonenumber should have Digits NotaNumber"+"<br>"
        return false
    }
    else if(pnum.length<10){
        document.getElementById("msg3").innerHTML="Phonenumber is lessthan 10 Digits"+"<br>"
        return false
    }
    else if(pnum.length>10){
        document.getElementById("msg3").innerHTML="Phonenumber is Morethan 10 Digits"+"<br>"
        return false
    }
    else if(pnum.charAt(0)<6){
        document.getElementById("msg3").innerHTML="Indian Standard Number start 7,8 and 9"+"<br>"
        return false
    }
    //RadioButton
    var ra=document.FormEnterance.radiobutton
    for(let i=0;i<ra.length;i++)
    {
        if(r[i].checked)
        {
            return true
        }
    }

    //User ID
    var id =document.getElementById("us").value
    if(id.length==0){
        document.getElementById("msg4").innerHTML="<br>"+"FirstName should not be empty"
        return false  
     }
    else if(id.length<3){
        document.getElementById("msg4").innerHTML="FirstName have more than 3letter"+"<br>"
        return false
    }
    else if(id.length>8){
        document.getElementById("msg4").innerHTML="FirstName have less than 8letter"+"<br>"
        return false
    }
}
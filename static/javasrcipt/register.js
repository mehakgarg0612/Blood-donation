function validate()
{

    var b=document.myform1.FirstName.value;
    var c=document.myform1.LastName.value
    var d=document.myform1.Email.value;
    var e=document.myform1.ContactNumber.value;
    var f=document.myform1.Password.value;
    var g=document.myform1.CPwd.value;
    
    if(b=="")
    {
        alert("Please enter your FirstName");
        return false;
    } 
    if(c=="")
    {
        alert("Please enter your LastName");
        return false;
    }
    if(d=="")
    {
        alert("Please enter your email");
        return false;
    }
    if(e=="")
    {
        alert("Please enter your contact number");
            return false;
    }
    if(f=="")
    {
        alert("Please enter your Password");
            return false;
    }
    if(g=="")
    {
        alert("Please enter your Conform password");
            return false;
    }
}
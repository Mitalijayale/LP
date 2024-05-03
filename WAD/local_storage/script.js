document.getElementById("formdata").addEventListener("submit",sample);
function sample(event){
    event.preventDefault();

    var userData=JSON.parse(localStorage.getItem("userData"))||[];

    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var address=document.getElementById("address").value
    var password=document.getElementById("password").value
    var confirmpass=document.getElementById("confirmpass").value
    var birth=document.getElementById("birth").value

    var sam={
        name:name,
        email:email,
        address:address,
        password:password,
        confirmpass:confirmpass,
        birth:birth
    };

    userData.push(sam)
    localStorage.setItem("userData",JSON.stringify(userData))
    document.getElementById("formdata").reset()
    alert("Registration Successfull!!")
    

}
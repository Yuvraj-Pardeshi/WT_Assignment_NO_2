function saveData(){
    let name = document.getElementById("usn").value;
    let email = document.getElementById("email").value;
    let psw = document.getElementById("psw").value;

    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_record.some((v)=>{return v.email===email})){
        alert("Duplicate data");
    }
    else{
        user_record.push({
        "name" : name,
        "email": email,
        "psw" : psw
    }) 
    localStorage.setItem("users",JSON.stringify(user_record));
    }
}
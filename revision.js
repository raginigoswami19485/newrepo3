let store="";
let data=()=>{
     let show=document.querySelector("#name").value
     let cpass = document.querySelector("#cpass").value
     let name=document.querySelector("#gmail").value
     let contect=document.querySelector("#contect").value
     let pass=document.querySelector("#pass").value


     if(name==""){
        alert("Please fill your name")
        document.querySelector("#name").focus()
        return false
    }
if(pass==""){
    alert("please fill your pass")
    document.querySelector("#pass").focus()
    return false
}
if(gmail==""){
    alert("plase fill gmail")
    document.querySelector("#gmail").focus()
    return false 
}
if(gmail.includes("@")){
    alert("plase include @")
    document.querySelector("#gmail").focus
    return flase
}
if(contect==""){
    alert("only fill the number")
    document.querySelector("#contect").focus()

    return false

}
if(cpass==""){
    alert("cofrom your pass")
    document.querySelector("#cpas").focus()
    return false

}
for (let i = 1; i <= 5; i++) {
    console.log("apna college");
}
    


}
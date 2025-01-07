// let click= "The word is <br> in given" ;      //    used br tag to change line
//      document.write(click)
//      alert("Hello World")
    //  let daco="ajaybharti ";
    //  alert(daco);
    //  alert(daco.length)
    //  document.write(daco.length) //to print on body
//   document.write(daco.slice(2,8)) //last digit is minus 1 always in slice
//   document.write(daco.toUpperCase())
//    document.write(daco.toLowerCase())
//  document.write(daco.charCodeAt(0)) //ascii value
    // document.write(daco.indexOf(7))  // used with string ? sirrr se puhna h


    // let text= "The java and mern Java and javascript is fun";

    // let ans = text.replace("java","hello")    // only first java of string
    // let ans = text.replaceAll("java","hello")   // replace all java written
    // let ans = text.replace(/java/g,"hello")  //   for globle change
//    let ans = text.replace(/java/i,"hello")    //  for  case in sesitive
//    let ans = text.replace(/java/ig,"hello")    //  for globle and case in sesitive
//  document.write(ans)
 

//  let text= "Thisfgh" // index value starts from zero
//  document.write(text.charAt(4))  // it is index value

// let text= "Thisfgh" // index value starts from zero
//  document.write(text.charAt(4))  // it is index value

// function okk(){

// let fruits=["Apple","Mango","Grapes","Banana","ajay","bharti"]

// let ans=fruits.length;
// document.write(ans) ; 

// let ans=fruits.pop()
// have to use pop again to remove second element
//  document.write(ans) //it stores pop means last one which it removes
//  document.write(fruits) //it store what remain after pop

// let ans=fruits.push("Orange","Avocadra","ragini","goswami")
//  document.write(ans) // it has ("Orange","Avocadra")
//  document.write(fruits) //after push "Apple","Mango","Grapes","Banana" "Orange","Avocadra"




// let store="";
// let data=()=>{
//      let name=document.querySelector("#name").value
//      let contect=document.querySelector("#contect").value
//      let gmail=document.querySelector("#gmail").volue
// let pass= document.querySelector("#pass").value
// let cpass=document.querySelector("#cpass").volue

// if(name===""){
//     alert("please fill your name");
//     document.querySelector("#name").focus();
//     return false
// }
// if(gmail==""){
//     alert("please enter your gmail");
//     document.querySelector("#gmail").focus();
//     return false
// } }



let data = () => {


    let name = document.querySelector("#name").value;
    let contect = document.querySelector("#contect").value;
    let gmail = document.querySelector("#gmail").value; 
    let pass = document.querySelector("#pass").value;
    let cpass = document.querySelector("#cpass").value; 

    // Validate name
    if (name === "") {               
        alert("Please fill your name");
        document.querySelector("#name").focus();
        return false;
    }

    // Validate contact number
    if (contect === "") {
        alert("Please fill your contact number");
        document.querySelector("#contect").focus();
        return false;
    }

    // Validate gmail
    
    if (gmail === "") {
        alert("Please enter your gmail");
        document.querySelector("#gmail").focus();
        return false;
    }
    if(!(gmail.includes("@"))){
        alert("your email is not correct please fill @");
        document.querySelector("#gmail").focus();
        return false;
    }
    // if(!(gmail.includes("@"))){
    //     alert("add @ in email")
    //     document.querySelector("#email").focus()
    //     return false
    // }
    // Validate password
    if (pass === "") {
        alert("Please enter your password");
        document.querySelector("#pass").focus();
        return false;
    }

    if (cpass === "") {
        alert("Please confirm your password");
        document.querySelector("#cpass").focus();
        return false;
    }       
    // if(!(pass.match(/[~!@#$%^&*-+]/))){
    //     alert("please add one special character")
    //     document.querySelector("#pass").focus()
    //     return false
    // }
    // if(!(pass.match(/[!@#$%^&*+-*/]/))){
    //     alert("please add one special character");
    //     document.querySelector("#pass").focus();
    //     return false;
    // }
    if (!(pass.match(/[!@#$%^&*+-*/]/))) {
        alert("Please add one special character");
        document.querySelector("#pass").focus();
        return false;
    }
    if(pass!=cpass){
 alert("mis match pass please check it")
 document.querySelector("#cpass").focus();
 return false;
    }
    alert("Form Submitted Successfully");
    return true; 
}
   
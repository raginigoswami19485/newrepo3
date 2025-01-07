// let store="";
// let data=()=>{
//      let show=document.querySelector("#name").value
//      let cpass = document.querySelector("#cpass").value
//      let name=document.querySelector("#gmail").value
//      let contect=document.querySelector("#contect").value
//      let pass=document.querySelector("#pass").value

    
//      if(name==""){      
//         alert("Please fill your name")
//         document.querySelector("#name").focus()
//         return false
//     }
// if(pass==""){
//     alert("please fill your pass")
//     document.querySelector("#pass").focus()
//     return false
// }
// if(gmail==""){
//     alert("plase fill gmail")
//     document.querySelector("#gmail").focus()
//     return false 
// }
// if(gmail.includes("@")){
//     alert("plase include @")
//     document.querySelector("#gmail").focus()
//     return flase
// }
// if(contect==""){
//     alert("only fill the number")
//     document.querySelector("#contect").focus()

//     return false

// }
// if(cpass==""){
//     alert("cofrom your pass")
//     document.querySelector("#cpas").focus()
//     return false

// }
// for (let i = 1; i <= 5; i++) {
//     console.log("apna college");
// }
// }

// function okk(){

    // let fruits=["Apple","Mango","Grapes","Banana"]

//    let ans=fruits.length;
//    document.write(ans);  //4

// let subdata=["java","html","css","c++"]
// let anss=subdata.length;
//  alert("subdata =",ans);

// let ans=fruits.push("Orange","Avocadra")
// document.write(ans); // it has ("Orange","Avocadra")
// document.write(fruits); //after push "Apple","Mango","Grapes","Banana" "Orange","Avocadra"

// let ans= fruits.unshift("raginis") 
// document.write(ans)
//  document.write(fruits)
//  console.log(fruits)
 
//  let arr= [6,7,5,4,3,9,1,2,9,8,]
//  let ans =arr.sort()
//  document.write(ans) 

// reverse order
//  let ans= arr.reverse()
//  document.write(ans)

//  let ans= arr.sort().reverse()
//  document.write(ans)
 //let ar1= [1,3,5,7,9]
//  let ar2= [2,4,6,8]

//  let ans= ar1.concat(ar2)//*********************************************************************************************************
// ans.sort()
//  document.write(ans)

// let ar1= [1,33,5,17,9]
// let ar2= [2,4,64,8]
// let ans=ar1.sort( (a,b) => a-b )  // sort with correct order 

// // // let ans=ar1.sort( (a,b) =>b-a )   reverse with descending order in correct way
// document.write(ans)
//**************************************************************************************************************************************************************
// 
//********************splice*************************/




// // let ans=a.slice(0,6)
// // // let ans=a.slice(0,-6)  //  remove from last
// //  document.write(ans)


//  a.splice(2,3,14,20);
// document.write(a);
// let ans=a.map(function(num){
//    return num*2
//  })
//  let ans=a.map(function(b){
//   return b+3
//  })
//  document.write(ans);
 
//  let ans=a.map(function(num){
//   //  return num*2
 //})
 //let ans=a.map(function(b){
  // return b+3
 // })
 let a=[2,4,7,9,1,3,4]

//  let ans=a.map((num)=>num*2)  //used with arrow function

//  document.write(ans)
// let ans=a.filter((num)=>num>5)
//  let ans=a.filter((num)=>num%2==0)  //gives even number
 //let ans=a.filter((num)=>num%2!==0)  //odd number
 //document.write(ans)

//  a.forEach((num)=>{
//   document.write(num*2)
//  })
//  for(let num of a ){
//    document.write(num);
//   }
  
//   function start(){

//     let show= document.getElementById("text")
//    show.textContent=("Yes it comes") //changes only content
//   show.innerHTML="<h2>Yes it comes</h2>"
//     show.style.color="blue"
// }
 

// let okk=(a)=>{
  
//   return document.write("hello" +a)

//  }

// let okk=(num)=>{
//   return document.write("welcome "+" "+ num)



// let go=(a)=>{
//   return document.write("ragini"+" " +"sister" +" "+ a) 
// }
// let arr= [3,2,5,6,7,8]

// let ans1= arr.map((num)=>num*2)

//  console.log(ans1);












//  let arrs=[1,2,3,4,5]
//  let ans=arrs.map((ko)=>ko*4)
//  alert(ans)

// let go=()=>{

//   let show=document.querySelector("#dis")
//   show.innerHTML="Hello Javascript";
//   show.style.color="red";
//   show.style.fontSize="40px";
// }


// let counter=0;
// let add=()=>{
//    counter++;
//   let show=document.querySelector("#in");
//   show.innerHTML=counter;
  
// }


// let sub=()=>{   
//   let show=document.querySelector("#in")
//   if(counter>0){
//     counter--;
//   }
//   show.innerHTML=counter;
// }

// let zero=()=>{
//   counter=0;
//   let show=document.querySelector("#in");
//   show.innerHTML=counter;

// }

//  //we can get img direct if given in div to convert it into background image so we get that image byt its id   by using "src" in js

// //   let rot1=()=>{
// //     let show=document.querySelector("#rotate")
// //     show.style.background="red";
// //     show.style.borderRadius="70px";
// //     show.style.rotate="200deg"
// //   }

// //   let rot2=()=>{
// //     let show=document.querySelector("#rotate")
// //     show.style.background="blue";
// //     show.style.borderRadius="100%"
// //   }

// //   let open=()=>{
// //      let hidee=document.querySelector("#box")
// //      if(hidee.style.display=="none"){
// //        hidee.style.display="block"
// //      }
// //      else{
// //        hidee.style.display="none"
// //      }
// //    }


// //   // toggle property  only uses for hide or do none things
   
// //   //  let open=()=>{
// //   //   let hidee=document.querySelector("#box")
// //   //   hidee.classList.toggle('hidden')
// //   // }
// //   let count=16;   // by defalut font dixe of text

// //   let upp=()=>{
// //     let diss= document.querySelector("#outi")
// //     count++;   // it can be written in that way also  count=count*2;
// //     diss.style.fontSize=count+"px";
// //   }

// //   let loww=()=>{
// //     let diss= document.querySelector("#outi")
// //     count--;
// //     diss.style.fontSize=count+"px";
// //   }

// //   let works=()=>{
// //     let mean=document.querySelector("#saww").value;    // to take the information of input tag we use . value at end
// //     let mann=document.querySelector("#wordd")
// //     mann.innerHTML=mean;
// //   }

// //   let alrt=()=>{
// //     let deem=document.querySelector("#asd")
// //     deem.innerHTML="How U Do It"
// //   }



// let arr= ["ragini",20,"bhopal"] // its array
// let str= "kjalkhdgku,aljkdh.,kahfsdjh";  // string

// let obj= {  // has unique key value  like name , age ,city etc.

//      name:"ragini",
//      age:21,
//      city:"bhopal",

 
  //    // we can make function also in object

    //  welcome: function=(a)=>{
    //   document.write("Welcome to my Home Page")   // to add something in function we add template leteral and "this" and key word
    // }

  //   welcome: function({
  //     console.log(`Welcome to ${this.my} Home `)   
  //  }),        // to add array in function

  //  friuts:["Mango","Grapes","Banana"]


// console.log(obj.age); 
// console.log(obj.friuts[1])

// console.log(arr[1])  // gives index value
// console.log(obj.name);  // object access

// to add another thing in objec
//  let names= prompt("enter your name");
//  alert("hello" +" "+names);
// let user = confirm("Do you like JavaScript");
// (user==true)?alert("thank you"):alert("no worries keep learing");
// let str= "Javascript is easy. I love javascript";
//         let string = confirm(str);
//         if(string==true) {
//             let update = str.replace(/javaScript/ig, "Coding")
//             alert(update)
//         }
//         else {
//             alert(str)
//         } 
    

// let str="javascript is easy.i love java";
// let strs = confirm(str);
// if(strs==true){
//  let update=str.replace(/javascript/ig,"codding");
//  alert(update);
// }
// else{
//   alert(str);
// }

// for (let n=1; n<=10; ++n){
//   console.log(n);
// }
// let arr = [];
// let str = null;
// for (let i=1; i<=3; ++i){
//     str = prompt("Enter Your Favourite Fruits");
//     arr.push(str);
// }
// // alert("Your favourite fruits are :"[ ${arr} ]);
// console.log(arr)

// arr=[];
// str=null;
// for(let  i=1;i<=3;i++){
//   let ok=prompt("enter your favourite fruits");
//   arr.push(str);

// // alert("your favourite fruts is:" [ ${arr} ]);

// (arr);}
// let num = [10, 20, 30, 40, 50];
//         let sum = 0;
//         for (let i = 0; i < num.length; i++) {
//             sum += num[i];
//         }
//         alert("The sum of the numbers in the array is: " + sum);
    
        // let num=null;
        // let arr=[];
        // console.log(typeof(num)) ;        // object : (primitive data type)
        //     for (let i=1; i<=5; ++i){
        //         num=prompt("Enter"+(i) );
        //         arr.push(num);
        //     }
        //     let filter = arr.filter((n)=> n%2==0)
        //     alert("Even Numbers are : " + filter);


            // let text= "html is easy. html is fun!";
            // let string = confirm(text);
            // if(string==true){
            //     let str=text.replace(/html/ig, "css").toUpperCase();
            //     alert(str);
            // }
            // else{
            //     alert(text);
            // }

//             let num = prompt("Enter Number to Print Table");

// for (let i = 1; i <= 10; i++) {
//     console.log();
// }
// let num = prompt("Enter Number to Print Table");

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }
// let num = prompt("Enter Number to Pring Table");
// for (let i=1; i<=10; ++i){
//     console.log(num +"x"+ i + "="+(num*i));             // table print
// }
function showTable() {
  let num = document.getElementById("number").value;
  let output = document.getElementById("tableOutput");
  output.innerHTML = ""; // Clear previous results

  for (let i = 1; i <= 10; i++) {
      output.innerHTML += num + " x " + i + " = " + (num * i) + "<br/>";
  }
}
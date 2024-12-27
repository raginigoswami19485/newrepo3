// // function rag(){
     
// // let text="hello ragini i m from bhopal";
// // alert(text.length) 
// // let text2="heloo";
// // document.write(text.length) to print in body
// // document.write(text.charAt(4)) pass the index number
// // document.write(text.slice(2,10))  llo rag
// // document.write(text.concat(" "+text2))
// //  let ans= document.write(text2.trim()
// // a.splice(2,0,39)
// // document.write(a)// map   
// // let ans=a.map(function(num){
// //     return num*2
// // })
// // document.write(ans);
// // }
// function rag(){
// // let a=10;
// // if(a%2==0){
// //   alert("even")
// // }
// // else{
// //     alert("odd")
// // }
// // let a=22;
// // if(a>=18){
// //     alert("yes for vote")
// // }
// // else{
// //     alert("you are not ready for vote")
// // }

// // let age=;

// // let ans=a>=10?"adult":"child";
// // alert(ans)

// // alert("heeeloo")

// // let age=window.prompt("enter your age")
// //  let ans=age>=18? "yes for vote": "no";
// // alert(ans)

// // let marks=window.prompt("enter your marks")
// // let result=marks>=40? "pass":"fail";
// // alert(result)

// // let show=window.prompt("enter your no.")
// // if(33>=pass)
// //  alert("pass")
// // else{
// //   alert("pass")
// // }


// // let show1=window.prompt(" do you like wibside say yes")
// // let age=window.prompt("entre your age")
// // let result=age>=20?"adult":"child";
// // alert(result)



// // let age=window.prompt("enter your age")
// // if(age>=18){
// // console.log("adult")
// // }
// // else{
// //     console.log("child")
// // }
// //  for(let i=12;i<=10;i++){
// //     alert(i)
// //  }

// //  for(let i=12;i<=10;i++){
// //    alert(i)
// // }
 
// // }
// // rag();


// console.log("hello")
// full name ="hJHGJ";
// console.log(full name);
// console.log("")
// console.log("")


// fullname ="hello ragini";





// age=78;
// console.log(age);
// {
// let a=90;
// console.log(a)
// }
// {
//   let a=80;
//   console.log(a)
// }
// let obj={

// }


// let stu1= { name:"ragini", city:"bhopal"}

// let stu2={ class:12,up:40}

// let student={...stu1,...stu2,}
// console.log(student)

// let sub1={
//   name:ragini,
//   city:bhopal,
// }
// let obj2={
//   age:21,
//   from:up,
// }

// let object={...sub1,...obj2,}
// console.log(object)


// // array of object

// let student=[
//    {
//       name:"ragini",
//       age: 20
//    },
//    {
//       name:"raj",
//       age:22
//    }]
//   student.forEach((e)=>
//   {
//    console.log(e.age+2);
//   })

// 2 tupe of funtion
// 1> function num(){}
// 2>let num=()=>{}
// Anonymus
// 3>let hii=function();
// {
// console.log("anonymus funtion")
// }
// hii();

// /speci

// [IIFE Immediately Invoked Function Expression]

   // let newarr=student.map((e)=>{
   //    return e.age+1;  
   //  })
   // console.log(newarr);
// Closure padana h
const go=()=>{
   let student=[

      { name:"ragini", age: 20, place:"bhopal"},
      {name:"raj", age:22, place:"bhopal"},
      { name:"divya",age:25,place:"bhopal"}

   ]
   student.forEach((e)=>{
let output=document.querySelector("#done")
output.innerHTML+=`
    
      <tr>
        <td>${e.name}</td>
  <td>${e.age}</td>
    <td>${e.place}</td>
      </tr>
      `
   
   })
}

go()

// let a=89;
// let b=90;
// let c=76;
// console.log("a+b=",a+b)


// let a=5;
// let b=8;
// console.log("!(5<8)=",(a<b));

// conditional statement
// let age=12;
// if(age>18){
//    console.log("you can vate");
// }
// else{
//    console.log("you can not vote")
// } 

// conditional statement if else strat
// {

// let mode="light";
// let color;
// if(mode==="drack"){
//    color="black";
// }
// if(mode==="light"){
//    color="white";
// }
// console.log(color);

// }

// {
// let num =20;
// if(num%2==0){
//    console.log("even");
// }
// else{
//    console.log("add");
// }

// }

// {
//    let age=8715;
//    if(age<=15){
//       console.log("childe")
//    }
//    else if(age>=70){
//       console.log("old")
//    }
//    else{
//       console.log("middile-age")
//    }
// }

// {
//    let age=12;
//     let result= age>=18?"adult": "not adult";
//    //  alert(result);
//     console.log(result)

// }
// // {
// //    let name = prompt("hello what is your name");
// //    console.log(name);
// // }

// {
//    let num=prompt("give you value");
//    if(num%5==0){
//       console.log(num,"multiple of 5");
//    }
//    else{
//       console.log(num,"this num is not multiple of 5")
//    }
// }
// {
//    let num=prompt("give you marks");
// if(num>=80 && num<=100){
//    console.log("your result=","A");
// }
// else if(num>=70 && num<=89){
//    console.log("your result=","B ");
// }
// else if(num>=60 && num<=69){
//    console.log("your result=","c");
// }
// else if(num>=50 && num<=59){
//    console.log("your result=","d");
// }
// else if(num>=0 && num<=40){
//    console.log("your result=","fail");
// }
// else{
//    console.log("involide num.");
// }
// } 


// compalete if else statemnt

// strat loop==>>

// for(let i=1;i<=1000;i++){
//    console.log("khushboo");
// }
// {
// let sum = 0;
// for(let i=1;i<=5;i++){
//    sum = sum + i;
// }
// console.log(sum,"sum ki value ")
//    console.log("loop has ended");
// }


// {
//    for(let i=1;i<=5;i++){
//    console.log("i=>",i);
// }
// }
// {
//    for(let i=1;i<=5;i++){

//    }
// }
// {
//    let i=1;
//    while(i<=5){
//       console.log("i=",i)
//       i++;
//    }
// }
// {
//    let i=1
//    while(i<=15){
//       console.log("kushuboo")
//    }
// }

prompt
// let store=""
// let cal=(value)=>{
     
//     let show=document.querySelector(".display")
//     store=store+value;
//     show.innerHTML=store;
    
// }
// let result=()=>{
//     let show=document.querySelector(".display")
//     show.innerHTML=eval(store)
//     store=eval(store)
//     store.toString()
// }            
// let del=()=>{
//     let show=document.querySelector(".display")
//     store=store.slice(0 ,-1);
//    show.innerHTML=store
// }
// let ac=()=>{
//     let show=document.querySelector(".display")
// show.innerHTML=store
// store="";
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("apna college");
// }
// let press= this "cybrom" 'office' string
//  alert(press)

// clock
// let time=new Date();
// console.log(time.toLocaleString());
// let time1=time.getFullYear()

// setInterval(()=>{
//     // let time=new Date();
//     let show=document.querySelector("#display")
//     let time=new Date()
//     let curntime=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds ()}`
//     show.innerHTML=curntime;
// },1000)

 let alert=()=>{
 let inp=document.querySelector("#set").volue;
 let show=document.querySelector("#display")
  let inter=setInterval(()=>{
    let time= new Date()
    let alarmtime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`
 if(alarmtime==inp){
    show.innerHTML="alaram in runging"
    document.querySelector("#aud").play()
    setTimeout(()=>{
        document.querySelector("#aud").pause()

    },6000)
}
    else{
        show.innerHTML="set alaram";
     }
 },1000)
 }

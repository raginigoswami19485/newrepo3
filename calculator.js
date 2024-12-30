let store=""
let cal=(value)=>{
     
    let show=document.querySelector(".display")
    store=store+value;
    show.innerHTML=store;
}
let result=()=>{
    let show=document.querySelector(".display")
    show.innerHTML=eval(store)
    store=eval(store)
    store.toString()
}            
let del=()=>{
    let show=document.querySelector(".display")
    store=store.slice(0 ,-1);
   show.innerHTML=store
}
let ac=()=>{
    let show=document.querySelector(".display")
show.innerHTML=store
store="";
}






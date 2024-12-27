let store="";
let cal=(value)=>{
     
    let show=document.querySelector("#display")
    store=store+value
    show.innerHTML=store
}
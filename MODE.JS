// let button=document.querySelector(".button");
// let body=document.querySelector("body");
// console.log(button,body);
// let mode='dark'; //light
// button.addEventListener("click",()=>{
//     console.log("button was click");
// if(mode==='dark'){
//     mode='light';
//     body.classList.add("light");
//     body.classList.remove(
//         "dark"
//     );
// }
// else{
//     mode='dark';
//     body.classList.add("dark");
//     body.classList.remove("light");
// }

// })
let mode='dark';
let button=document.querySelector('.button');
let body=document.querySelector('body');
button.addEventListener("click",()=>{
if (mode==='dark') {
    mode='light';
    body.classList.add("light");
    body.classList.remove("dark");
}
else{
mode='dark';
body.classList.add("dark");
body.classList.remove("light");
}
})
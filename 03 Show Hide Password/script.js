let input = document.querySelector(".input-text")
let btn = document.querySelector(".btn")
let Istrue = false
btn.addEventListener("click",()=>{
   Istrue = !Istrue
   if (Istrue) {
   	 input.type = "password"
   	 btn.innerText = "👁️"
   }else{
   	input.type = "text"
   	btn.innerText = "🙈"
   }
})
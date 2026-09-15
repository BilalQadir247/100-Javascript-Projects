let container = document.querySelector(".container")
let inputext = document.querySelector(".input-color-code")
let btn = document.querySelector(".get-color-btn")
let copybtn = document.querySelector(".copy-color-code")
let copyText = false
let ColorCodeFinal;
btn.addEventListener("click", () => {
   let RandomNum = Math.floor(Math.random() * 6777215) 
   let ColorCode = "#" + RandomNum.toString(16)
   container.style.backgroundColor = ColorCode 
   ColorCodeFinal = ColorCode
   inputext.value = ColorCodeFinal
   copyText = false
   if (copyText) {
	 	copybtn.innerText = "Copied"
	 }else{
	 	copybtn.innerText = "Copy Text"
	 }

})
copybtn.addEventListener("click",()=>{
	 navigator.clipboard.writeText(ColorCodeFinal)
	 copyText = true
	 if (copyText) {
	 	copybtn.innerText = "Copied"
	 }else{
	 	copybtn.innerText = "Copy Text"
	 }
})
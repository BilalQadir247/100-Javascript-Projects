let counter = document.querySelector(".Counter")
let increase = document.querySelector(".Increase")
let decrease = document.querySelector(".Decrease")
let reset = document.querySelector(".Reset")

let Count = 0

increase.addEventListener("click",()=>{
	Count = Count + 1
	counter.innerText = Count 
    let RandomNum = Math.floor(Math.random() * 6777215) 
    let ColorCode = "#" + RandomNum.toString(16)
    counter.style.color = ColorCode 

})

decrease.addEventListener("click",()=>{
	Count = Count - 1
	counter.innerText = Count 
	counter.innerText = Count 
    let RandomNum = Math.floor(Math.random() * 6777215) 
    let ColorCode = "#" + RandomNum.toString(16)
    counter.style.color = ColorCode 
})

reset.addEventListener("click",()=>{
	Count = 0
	counter.innerText = Count 
})
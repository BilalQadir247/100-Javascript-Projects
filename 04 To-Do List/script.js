let inputText = document.querySelector(".task-input")
let savebtn = document.querySelector(".save-btn")
let tasklist = document.querySelector(".task-list")
let task = []

savebtn.addEventListener("click",()=>{
	if (inputText.value != "") {
           task.push(inputText.value)
           inputText.value = ""
           loadTask()
	}else{
		alert("Enter a task")
	}
	
})

const loadTask = () =>{
	tasklist.innerHTML = ""
	task.forEach((v,index)=>{
		tasklist.innerHTML += `<li>${v} <button class="deletebtn">Delete</button></li>`
		let deletebtn = document.querySelector(".deletebtn")

		deletebtn.addEventListener("click",()=>{
			task.splice(index,1)
			console.log(task)
            loadTask()
		})
	})
   
}


function  addTask(){
    let popup = document.querySelector(".popup")
    popup.style.display = "flex"
}

const taskList = []
function add(){
  let name = document.getElementById("name").value
  const tempObj = {
      id : Date.now(),
      taskname : name
  }
 
  taskList.push(tempObj)
  addTaskOnScreen()
}

  function addTaskOnScreen(){
      let element = document.createElement("div")
      element.setAttribute("id", "child")
      let existingElement = document.getElementById("parent")
      existingElement.appendChild(element)
      element.innerText = taskList[taskList.length - 1].taskname
      let line = document.createElement("hr")
      line.setAttribute("width","100%")
      element.appendChild(line)

      let plus = document.createElement("img")
      plus.setAttribute("src","./circle-plus-solid.svg") 
      element.appendChild(plus).addEventListener('click', add2)
          
      let trashIcon = document.createElement("img")
      trashIcon.setAttribute("src","./trash-can-solid.svg") 
      element.appendChild(trashIcon).addEventListener('click', () =>{
          existingElement.removeChild(element)
      })

      let popup = document.querySelector(".popup")
      popup.style.display = "none"
   
  }

  const taskList2 = []
  function add2(){
      var name2 = document.getElementById("name2").value
      console.log(name2)
      const tempObj2 = {
          id2 : Date.now(),
          taskname2 : name2
      }
     
      taskList2.push(tempObj2)
      addTaskOnScreen2()
  }
  function addTaskOnScreen2(){

      let popup = document.querySelector(".popup1")
      popup.style.display = "flex"
  }
  function add23(){
      let existingElement = document.getElementById("child")
      // console.log(existingElement)
      let element = document.createElement("div")
      element.setAttribute("class", "child1")
      existingElement.appendChild(element)
      element.innerText = taskList2[taskList2.length - 1].taskname2
      console.log(element)
      
          let addIn = document.getElementsByClassName("add1")
          addIn[0].addEventListener('click' , () => {      
              let popup1 = document.querySelector(".popup1")
              popup1.style.display = "none"
  })

}


  function close(){
             let popup = document.querySelector(".popup")
             popup.style.display = "none"
             let popup1 = document.querySelector(".popup1")
             popup1.style.display = "none"
  }
let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset-btn")
let newgamebtn = document.querySelector(".new-btn")
let msgcontainer =document.querySelector(".msg-container")
let msg =document.querySelector("#msg")
 
let turnO = true //player X , player O

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetgame = () =>{
    turnO =true
    enableboxes()
    msgcontainer.classList.add("hide")
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled =false
        box.innerText=""
    }
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled =true
    }
}
const showwinner =(winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disableboxes()
}

boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        console.log("Box was clicked")

        if(turnO){
            box.innerText = "O"
            turnO=false
            box.style.color="#EEEEEE"
        }
        else{
            box.innerText = "X"
            turnO=true
            box.style.color = "yellow"
        }
     box.disabled =true

        checkwinner()
    })
})

const checkwinner = () => {
    for(pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner",pos1)
                disableboxes()
                showwinner(pos1)
            }
        }
    }
}


newgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)


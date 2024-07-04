let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset_btn");
let turn0= true//player x, player 0
let count=0;
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msgContainer")
let msg= document.querySelector("#msg");

const winPatterns=[
    [0,1,2], [0,3,6], [0,4,8],
     [1,4,7], [2,5,8], [2,4,6], 
     [3,4,5], [6,7,8]]

const resetGame=()=>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("box was clicked")
        if (turn0=== true){
            box.innerText="0";
            turn0= false
            count+=1;
        }
        else if(turn0=== false){
            box.innerText="X";
            turn0=true;
            count+=1;
        }
        box.disabled=true;//cannot add value after adding it once.
        let isWinner=checkWin();
        if(count===9 && !isWinner){
            gameDraw()
        }
    })
})

const gameDraw=()=>{
    msg.innerText="Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText=""
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWin=()=>{
    for ( let pattern of winPatterns){
    //     console.log(pattern[0], pattern[1], pattern[2])
    //     console.log(boxes[pattern[0]].innerText,
    //          boxes[pattern[1]].innerText,
    //           boxes[pattern[2]].innerText)
    // };

    let pos1= boxes[pattern[0]].innerText;
    let pos2= boxes[pattern[1]].innerText;
    let pos3= boxes[pattern[2]].innerText;

    if (pos1!= "" && pos2!= "" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            // console.log("winner", pos1)
            showWinner(pos1);
            return true;
        }
    }
 } 
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);



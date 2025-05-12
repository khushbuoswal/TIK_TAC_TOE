let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#btn");
let hidden = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],      
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    hidden.classList.add("hide");

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    hidden.classList.add("hide");
    turn0 = true;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
        box.innerText = "O";
        turn0 = false;
        }
        else{
        box.innerText = "X";
        turn0 = true;
        }
        box.disabled = true;
        
        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    hidden.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let element1 = boxes[pattern[0]].innerText;
        let element2 = boxes[pattern[1]].innerText;
        let element3 = boxes[pattern[2]].innerText;
        if(element1 != "" && element2 != "" && element3 != ""){
            if(element1 === element2 && element2 === element3){
                console.log("Winner", element1);
                showWinner(element1);

            }
        }
    }
}



btn.addEventListener("click", resetGame);
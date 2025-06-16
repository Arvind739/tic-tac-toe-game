let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgmbtn=document.querySelector("#new");
let msgconterner=document.querySelector(".msg-contener");
let message=document.querySelector("#msg");
let turnO=true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame= ()=>{
    turnO=true;
    enableboxes();
    msgconterner.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("clicked");
        if(turnO){
            box.innerText="o";
            turnO=false;

                }
            else{
                box.innerText="x";
                turnO="true";
            }
            box.disabled=true;
            checkwinner();
    });
});
const disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
    const enableboxes =()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
};
const showWinner =(winner)=>{
    message.innerText=`congratulation winner is ${winner}`;
    msgconterner.classList.remove("hide"); 
    disableboxes();
};
const checkwinner=()=>{
    for( let pattern of winPatterns){
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val === pos3val){
                console.log("winner");

                showWinner(pos1val);
            }
        }
}
};
newgmbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

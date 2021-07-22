function addToMovesContainer(direction){
  let item = document.createElement("li")
  item.innerHTML=direction
  let movesContainer=document.querySelector("ul#moves-container")
  movesContainer.append(item)
}

document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  
  
  
  function addInstruction(){
    if(event.key=="ArrowLeft"){
      addToMovesContainer("Left")
    }else if(event.key=="ArrowRight"){
      addToMovesContainer("Right")
    }else if(event.key =="ArrowDown"){
      addToMovesContainer("Down")
    }else if(event.key=="ArrowUp"){
      addToMovesContainer("Up")
    }
  }
  document.body.addEventListener("keydown", addInstruction)


  let moveButton=document.querySelector("button#move-button")
  moveButton.addEventListener("click", doMove)
  function doMove(){
    console.log("domove called")
    let movesContainer=document.querySelector("ul#moves-container")
    let moves=movesContainer.children
    //debugger
    if(moves.length==0){
      return
    }
    let direction=moves[0].innerHTML.toLowerCase()
    move(direction)
    moves[0].remove()
    setTimeout(doMove,500)
  }

  document.body.addEventListener("click", removeDirection)

  function removeDirection(){
    console.log(event.target)
    if(event.target.matches("ul#moves-container li")){
      event.target.remove()
    }
  }

});

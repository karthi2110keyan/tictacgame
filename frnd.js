var box = document.querySelectorAll(".box")
let letter ="X"
var turns = document.querySelector("span")
var last = document.querySelector(".result")
var result_box=document.querySelector(".button-box")

box.forEach((boxes,index)=>{


    boxes.addEventListener("click",function(){
  
   
  
      const random= Math.floor(Math.random()*9) 
     
    
  
  
      if(boxes.textContent==="" && letter==="X" ){


        boxes.innerHTML=letter
           boxes.style.color="#ff6b6b"
           letter="O"
           turns.innerHTML=letter
           turns.style.color="#eebb4d"
        
      }else if(boxes.textContent==="" && letter==="O" ){
        boxes.innerHTML=letter
          letter="X"
          turns.innerHTML=letter
          turns.style.color="#ff6b6b"
      }


      

var Xone=box[0].textContent==="X" && box[1].textContent==="X" && box[2].textContent==="X"
var Xtwo=box[0].textContent==="X" && box[4].textContent==="X" && box[8].textContent==="X"
var Xthree=box[2].textContent==="X" && box[4].textContent==="X" && box[6].textContent==="X"
var Xfour=box[3].textContent==="X" && box[4].textContent==="X" && box[5].textContent==="X"
var Xfive=box[6].textContent==="X" && box[7].textContent==="X" && box[8].textContent==="X"
var Xsix=box[0].textContent==="X" && box[3].textContent==="X" && box[6].textContent==="X"
var Xseven=box[1].textContent==="X" && box[4].textContent==="X" && box[7].textContent==="X"
var Xeight=box[2].textContent==="X" && box[5].textContent==="X" && box[8].textContent==="X"

var Oone=box[0].textContent==="O" && box[1].textContent==="O" && box[2].textContent==="O"
var Otwo=box[0].textContent==="O" && box[4].textContent==="O" && box[8].textContent==="O"
var Othree=box[2].textContent==="O" && box[4].textContent==="O" && box[6].textContent==="O"
var Ofour=box[3].textContent==="O" && box[4].textContent==="O" && box[5].textContent==="O"
var Ofive=box[6].textContent==="O" && box[7].textContent==="O" && box[8].textContent==="O"
var Osix=box[0].textContent==="O" && box[3].textContent==="O" && box[6].textContent==="O"
var Oseven=box[1].textContent==="O" && box[4].textContent==="O" && box[7].textContent==="O"
var Oeight=box[2].textContent==="O" && box[5].textContent==="O" && box[8].textContent==="O"

  if(Xone || Xtwo || Xthree || Xfour || Xfive || Xsix  || Xseven || Xeight){
  
    result_box.style.visibility="visible"
    last.innerHTML=" Player Wins!"
   

  }else if(Oone || Otwo || Othree || Ofour || Ofive || Osix  || Oseven || Oeight){
   
     result_box.style.visibility="visible"
      last.innerHTML=" Computer Wins!"
  }

 } )

})


var restart_button=document.querySelector(".btn2")


restart_button.addEventListener("click",function(){
  window.location.reload()
})
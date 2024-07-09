var box = document.querySelectorAll(".box")
var result_box=document.querySelector(".button-box")
var turns = document.querySelector("span")
var footer = document.querySelector("footer")
var last = document.querySelector(".result")


const arr =[]
let letter ="X"




box.forEach((boxes,index)=>{


  boxes.addEventListener("click",function(){

 

    const random= Math.floor(Math.random()*9) 
   
  


    if(boxes.textContent==="" && letter==="X" ){
      
   boxes.textContent="X"
   boxes.style.color="#ff6b6b"
   letter="O"
   turns.innerHTML=letter
   turns.style.color="#eebb4d"
   arr.push(index)
  
   

        for(var i=0;i<box.length;i++){


          if(!arr.includes(random) && letter==="O" ){
            footer.innerHTML="Opponent is thinking..."

            setTimeout(()=>{

              play_one(random)  
              letter="X"
              turns.innerHTML=letter
              turns.style.color="#ff6b6b"
              footer.innerHTML=""
            },4000)
            X_wins(result_box)
             break

          }else if(!arr.includes(i) && letter==="O" ){
               footer.innerHTML="Opponent is thinking..."
            setTimeout(()=>{
               footer.innerHTML=""
              play_two(i)
             letter="X"
             turns.innerHTML=letter
              turns.style.color="#ff6b6b"
              X_wins(result_box)
            },3500)
           
            break
            
            
          }
   
        }

        X_wins(result_box)
               
    }
   

  })
})







function play_one(val_one){
            var audio = new Audio("rclick-13693.mp3")
            audio.play()
            var  value_one=val_one
              box[value_one].textContent="O"
              arr.push(value_one)

}


function play_two(val_two){
           var audio = new Audio("rclick-13693.mp3")
           audio.play()
           var value_two =val_two
            box[value_two].textContent="O"
            arr.push(value_two)
  
}
    

function X_wins(result){




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
  
    result.style.visibility="visible"
    last.innerHTML=" Player Wins!"
   

  }
  
  if(Oone || Otwo || Othree || Ofour || Ofive || Osix  || Oseven || Oeight){
   
     result.style.visibility="visible"
      last.innerHTML=" Computer Wins!"
  }
}











var restart_button=document.querySelector(".btn2")


restart_button.addEventListener("click",function(){
  window.location.reload()
})
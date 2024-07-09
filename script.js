const x_color=document.querySelector(".choose-x")
const o_color=document.querySelector(".choose-o")

x_color.addEventListener("click",function(){

    if( x_color.style.backgroundColor==="#ff6b6b"){
          x_color.style.backgroundColor="#1d1d1d"
      
    }else{
          x_color.style.backgroundColor="#ff6b6b"
    x_color.style.color="#1d1d1d"
    }
    
})

o_color.addEventListener("click",function(){
    o_color.style.backgroundColor="#eebb4d"
    o_color.style.color="#1d1d1d"
})
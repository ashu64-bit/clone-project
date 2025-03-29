var glow = document.getElementById("btn");
        
        glow.addEventListener('mousemove', (e) => {
            const x = e.pageX - btn.offsetLeft;
            const y = e.pageY - btn.offsetTop;
            
            glow.style.setProperty('--x', x + 'px');
            glow.style.setProperty('--y', y + 'px');
        });



 var css = document.querySelector("h3");
var color1 = document.getElementById('code1');
var color2= document.getElementById('code2');
var body = document.getElementById('ram');

function changeColor(){
   body.style.background = 
    "linear-gradient(to right,"
     + color1.value 
     +","
     + color2.value 
     + ")"; 

     css.textContent = body.style.background + ";";
}

 color1.addEventListener("input", changeColor);

  color2.addEventListener("input", changeColor);
  
  glow.addEventListener("click",function(){
    document.getElementById("myDropdown").classList.toggle("show");
});
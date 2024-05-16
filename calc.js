
let valla= document.getElementById("result");
let cal = document.getElementById("calcu"); 
// Function that display value 
   function dis(val) { 
    valla.value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        valla.value += event.key; 
} 

 cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 

 // Function that evaluates the digit and return result 
 function solve() { 
    let x = valla.value 
    let y = math.evaluate(x) 
    valla.value = y 
} 

// Function that clear the display 
function clr() { 
    valla.value = "" 
} 
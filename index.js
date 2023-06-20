
const func_1=()=>{
    let a1= document.getElementById("a1").value;
    let a2= document.getElementById("a2").value;
    let a3= document.getElementById("a3").value;
    let a4= document.getElementById("a4").value;
    let a5= document.getElementById("a5").value;
    let a6= document.getElementById("a6").value;
    let a7= document.getElementById("a7").value;
    let a8= document.getElementById("a8").value;
    let a9= document.getElementById("a9").value;
    
    let a1btn= document.getElementById("a1");
    let a2btn= document.getElementById("a2");
    let a3btn= document.getElementById("a3");
    let a4btn= document.getElementById("a4");
    let a5btn= document.getElementById("a5");
    let a6btn= document.getElementById("a6");
    let a7btn= document.getElementById("a7");
    let a8btn= document.getElementById("a8");
    let a9btn= document.getElementById("a9");

if(a1=="X" && a2=="X" && a3=="X"){
    document.getElementById("print").innerHTML="Player X Won";
    a4btn.disabled=true;
    a5btn.disabled=true;
    a6btn.disabled=true;
    a7btn.disabled=true;
    a8btn.disabled=true;
    a9btn.disabled=true;

    a1btn.style.color=" green";
    a2btn.style.color=" green";
    a3btn.style.color=" green";
}
else if(a4=="X" && a5=="X" && a6=="X"){
    document.getElementById("print").innerHTML="Player X Won";
    a1btn.disabled=true;
    a2btn.disabled=true;
    a3btn.disabled=true;
    a7btn.disabled=true;
    a8btn.disabled=true;
    a9btn.disabled=true;

    a4btn.style.color=" green";
    a5btn.style.color=" green";
    a6btn.style.color=" green";
}
else if(a1=="X" && a4=="X" && a7=="X"){
    document.getElementById("print").innerHTML="Player X Won";
    a2btn.disabled=true;
    a3btn.disabled=true;
    a5btn.disabled=true;
    a6btn.disabled=true;
    a8btn.disabled=true;
    a9btn.disabled=true;

    a1btn.style.color=" green";
    a4btn.style.color=" green";
    a7btn.style.color=" green";
}
else if(a7=="X" && a8=="X" && a9=="X"){
    document.getElementById("print").innerHTML="Player X Won";
    a1btn.disabled=true;
    a2btn.disabled=true;
    a3btn.disabled=true;
    a4btn.disabled=true;
    a5btn.disabled=true;
    a6btn.disabled=true;

    a7btn.style.color=" green";
    a8btn.style.color=" green";
    a9btn.style.color=" green";
}
else if(a2=="X" && a5=="X" && a8=="X"){
    document.getElementById("print").innerHTML="Player X Won";
    a1btn.disabled=true;
    a3btn.disabled=true;
    a4btn.disabled=true;
    a6btn.disabled=true;
    a7btn.disabled=true;
    a9btn.disabled=true;

    a2btn.style.color=" green";
    a5btn.style.color=" green";
    a8btn.style.color=" green";
}
else if(a3=="X" && a6=="X" && a9=="X"){
    document.getElementById("print").innerHTML="Player X Won";
    a1btn.disabled=true;
    a2btn.disabled=true;
    a4btn.disabled=true;
    a5btn.disabled=true;
    a7btn.disabled=true;
    a8btn.disabled=true;

    a3btn.style.color=" green";
    a6btn.style.color=" green";
    a9btn.style.color=" green";
}
else if(a1=="X" && a5=="X" && a9=="X"){
    document.getElementById("print").innerHTML="Player X Won";
    a4btn.disabled=true;
    a2btn.disabled=true;
    a6btn.disabled=true;
    a7btn.disabled=true;
    a8btn.disabled=true;
    a3btn.disabled=true;

    a1btn.style.color=" green";
    a5btn.style.color=" green";
    a9btn.style.color=" green";
}
else if(a3=="X" && a5=="X" && a7=="X"){
    document.getElementById("print").innerHTML="Player X Won";
    a1btn.disabled=true;
    a2btn.disabled=true;
    a4btn.disabled=true;
    a6btn.disabled=true;
    a8btn.disabled=true;
    a9btn.disabled=true;

    a3btn.style.color=" green";
    a5btn.style.color=" green";
    a7btn.style.color=" green";
}
else if(a1=="O" && a2=="O" && a3=="O"){
    document.getElementById("print").innerHTML="Player O Won";
    a4btn.disabled=true;
    a5btn.disabled=true;
    a6btn.disabled=true;
    a7btn.disabled=true;
    a8btn.disabled=true;
    a9btn.disabled=true;

    a1btn.style.color=" green";
    a2btn.style.color=" green";
    a3btn.style.color=" green";
}
else if(a4=="O" && a5=="O" && a6=="O"){
    document.getElementById("print").innerHTML="Player O Won";
    a1btn.disabled=true;
    a2btn.disabled=true;
    a3btn.disabled=true;
    a7btn.disabled=true;
    a8btn.disabled=true;
    a9btn.disabled=true;

    a4btn.style.color=" green";
    a5btn.style.color=" green";
    a6btn.style.color=" green";
}
else if(a1=="O" && a4=="O" && a7=="O"){
    document.getElementById("print").innerHTML="Player O Won";
    a2btn.disabled=true;
    a3btn.disabled=true;
    a5btn.disabled=true;
    a6btn.disabled=true;
    a8btn.disabled=true;
    a9btn.disabled=true;

    a1btn.style.color=" green";
    a4btn.style.color=" green";
    a7btn.style.color=" green";
}
else if(a7=="O" && a8=="O" && a9=="O"){
    document.getElementById("print").innerHTML="Player O Won";
    a1btn.disabled=true;
    a2btn.disabled=true;
    a3btn.disabled=true;
    a4btn.disabled=true;
    a5btn.disabled=true;
    a6btn.disabled=true;

    a7btn.style.color=" green";
    a8btn.style.color=" green";
    a9btn.style.color=" green";
}
else if(a2=="O" && a5=="O" && a8=="O"){
    document.getElementById("print").innerHTML="Player O Won";
    a1btn.disabled=true;
    a3btn.disabled=true;
    a4btn.disabled=true;
    a6btn.disabled=true;
    a7btn.disabled=true;
    a9btn.disabled=true;

    a2btn.style.color=" green";
    a5btn.style.color=" green";
    a8btn.style.color=" green";
}
else if(a3=="O" && a6=="O" && a9=="O"){
    document.getElementById("print").innerHTML="Player O Won";
    a1btn.disabled=true;
    a2btn.disabled=true;
    a4btn.disabled=true;
    a5btn.disabled=true;
    a7btn.disabled=true;
    a8btn.disabled=true;

    a3btn.style.color=" green";
    a6btn.style.color=" green";
    a9btn.style.color=" green";
}
else if(a1=="O" && a5=="O" && a9=="O"){
    document.getElementById("print").innerHTML="Player O Won";
    a4btn.disabled=true;
    a2btn.disabled=true;
    a6btn.disabled=true;
    a7btn.disabled=true;
    a8btn.disabled=true;
    a3btn.disabled=true;

    a1btn.style.color=" green";
    a5btn.style.color=" green";
    a9btn.style.color=" green";
}
else if(a3=="O" && a5=="O" && a7=="O"){
    document.getElementById("print").innerHTML="Player O Won";
    a1btn.disabled=true;
    a2btn.disabled=true;
    a4btn.disabled=true;
    a6btn.disabled=true;
    a8btn.disabled=true;
    a9btn.disabled=true;

    a3btn.style.color=" green";
    a5btn.style.color=" green";
    a7btn.style.color=" green";
}
else if((a1=="X" || a1=="O") && 
(a2=="X" || a2=="O") && 
(a3=="X" || a3=="O") && 
(a4=="X" || a4=="O") && 
(a5=="X" || a5=="O") && 
(a6=="X" || a6=="O") && 
(a7=="X" || a7=="O") && 
(a8=="X" || a8=="O") && 
(a9=="X" || a9=="O")){
    document.getElementById("print").innerHTML="Match Tied";
}
else{
    if(flag==1){
        document.getElementById("print").innerHTML="Player X Turn";
    }
    else{
        document.getElementById("print").innerHTML="Player O Turn";
    }
}



}

const func_11=()=>{
    location.reload();
    a1=a2=a3=a4=a5=a6=a7=a8=a9='';
}

let flag=1;
const func_2=()=>{
    if(flag==1){
        document.getElementById("a1").value="X";
        document.getElementById("a1").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a1").value="O";
        document.getElementById("a1").disabled=true;
        flag=1;
    }
}
const func_3=()=>{
    if(flag==1){
        document.getElementById("a2").value="X";
        document.getElementById("a2").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a2").value="O";
        document.getElementById("a2").disabled=true;
        flag=1;
    }
}
const func_4=()=>{
    if(flag==1){
        document.getElementById("a3").value="X";
        document.getElementById("a3").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a3").value="O";
        document.getElementById("a3").disabled=true;
        flag=1;
    }
}
const func_5=()=>{
    if(flag==1){
        document.getElementById("a4").value="X";
        document.getElementById("a4").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a4").value="O";
        document.getElementById("a4").disabled=true;
        flag=1;
    }
}
const func_6=()=>{
    if(flag==1){
        document.getElementById("a5").value="X";
        document.getElementById("a5").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a5").value="O";
        document.getElementById("a5").disabled=true;
        flag=1;
    }
}
const func_7=()=>{
    if(flag==1){
        document.getElementById("a6").value="X";
        document.getElementById("a6").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a6").value="O";
        document.getElementById("a6").disabled=true;
        flag=1;
    }
}
const func_8=()=>{
    if(flag==1){
        document.getElementById("a7").value="X";
        document.getElementById("a7").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a7").value="O";
        document.getElementById("a7").disabled=true;
        flag=1;
    }
}
const func_9=()=>{
    if(flag==1){
        document.getElementById("a8").value="X";
        document.getElementById("a8").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a8").value="O";
        document.getElementById("a8").disabled=true;
        flag=1;
    }
}
const func_10=()=>{
    if(flag==1){
        document.getElementById("a9").value="X";
        document.getElementById("a9").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("a9").value="O";
        document.getElementById("a9").disabled=true;
        flag=1;
    }
}

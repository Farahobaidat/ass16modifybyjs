value2.addEventListener("input",checkinput);
value1.addEventListener("input",checkinput);
function checkinput(event){
    if(isNaN(event.target.value)){
    alert("Value X must be a number");
    }
}

function converttozero(event){
if(event.value===""){
    event.value=0;
}
}
button.onclick=function(){
    converttozero(value1);
    converttozero(value2);
    switch(select.value){
case'+':result.value=+value1.value+ +value2.value;
break;
case'-':result.value=+value1.value- +value2.value;
break;
case'*':result.value=+value1.value*+value2.value;
break;
case'/':result.value=+value1.value/+value2.value;

};
}


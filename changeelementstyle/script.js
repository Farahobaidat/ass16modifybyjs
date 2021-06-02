submit.classList.remove('disabled');
submit.classList.add('able');
let button=document.getElementsByClassName('able')[0];
let style=document.getElementsByTagName('select')[0];

button.onclick=function(){
    document.body.classList.add(`${style.value}`);
    document.forms[0].setAttribute("onsubmit","return false");
}

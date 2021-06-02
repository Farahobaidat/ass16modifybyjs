
document.getElementById('add-element').onclick=function(){
    elements.innerHTML=`<div class="element">
    <h3>Element some ID number here</h3>
    <h4>This is an element</h4>
    <button>Delete</button>
</div>`
document.getElementsByTagName("button")[1].onclick=function(){
    document.getElementsByClassName("element")[0].remove();
};

};
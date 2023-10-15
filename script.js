let expression = document.querySelector('.expression');
let key = document.getElementsByClassName('key');
let value = document.querySelector('.value');


Array.from(key).forEach(function(item){
    item.addEventListener('click',function(){
        // display.innerHTML=item.innerHTML;
        let text = document.createTextNode(item.innerHTML)
        expression.appendChild(text)
    })
})
// console.log(expression.innerHTML);

// let calculate = parseInt(expression.innerHTML)
// console.log(calculate);

document.querySelector('.yellow').addEventListener("click",function(){
    expression.innerHTML=""
    value.innerHTML=""
})

document.querySelector('.equal').addEventListener("click",function(){
    // console.log(expression.innerHTML[expression.innerHTML.length-1]==="+")
    // var calculate = eval(expression.innerHTML)
    //console.log(calculate);
    // value.innerHTML=calculate
    if((expression.innerHTML[0]==="+" || expression.innerHTML[0]==="-" || expression.innerHTML[0]==="*" ||expression.innerHTML[0]==="/") || (expression.innerHTML[expression.innerHTML.length-1]==="+" || expression.innerHTML[expression.innerHTML.length-1]==="-" || expression.innerHTML[expression.innerHTML.length-1]==="*" || expression.innerHTML[expression.innerHTML.length-1]==="/")){
        value.innerHTML="Invalid Syntax"
    }
    else{
        var calculate = eval(expression.innerHTML)
    //console.log(calculate);
        value.innerHTML=calculate
    }
    
})


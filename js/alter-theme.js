const btnAlter = document.getElementById('alter-theme');
const all = document.querySelectorAll("*");
const transition = document.querySelectorAll("main, header, footer");
const header = document.querySelector('header');
const text = document.querySelectorAll('body');
const main = document.querySelector('main');
const tagA = document.querySelectorAll("a");
const input = document.querySelectorAll("input");
const button = document.querySelectorAll("button");
const item = document.querySelectorAll(".item");
const paginate = document.querySelectorAll(".paginate");
const footer = document.querySelector('footer');
var flag = true;

btnAlter.onclick = function(){
    transition.forEach(tr =>{
        tr.style.transition ="all 0.5s ease-in-out" ;
    });

    if (flag){
        header.style.backgroundColor = "rgb(235, 235, 235)";
        text.forEach(txt =>{
            txt.style.color = "black";
            txt.style.textShadow = "1px 2px 2px rgb(225, 225, 225)";
        });
        main.style.backgroundColor = "rgb(182, 182, 182)";
        tagA.forEach(a =>{
            a.classList.add('a-light');
        });
    
        input.forEach(inp =>{
            inp.className =  'input-light';
        });
    
        button.forEach(but =>{
            but.className =  'button-light';
        });
    
        item.forEach(it =>{
            it.className =  'item-light';
        });
    
        paginate.forEach(pg =>{
            pg.style.backgroundColor =  'white';
        });
        footer.style.backgroundColor = "rgb(117, 117, 117)";
    }
    
    else{
        header.style.backgroundColor = "";
        text.forEach(txt =>{
            txt.style.color = "white";
            txt.style.textShadow = "1px 2px 2px rgb(0, 0, 0)";
        });
        main.style.backgroundColor = "";
        tagA.forEach(a =>{
            a.classList.remove('a-light');
        });
    
        input.forEach(inp =>{
            inp.className = " ";
        });
    
        button.forEach(but =>{
            but.className = " ";
        });
    
        item.forEach(it =>{
            it.className = "item";
        });
    
        paginate.forEach(pg =>{
            pg.style.backgroundColor = "black";
        });
        footer.style.backgroundColor = "";
    }

    btnAlter.querySelector('i').className = flag ? "fa-regular fa-moon fa-xl" : "fa-regular fa-sun fa-xl";

    flag = !flag;
}
  




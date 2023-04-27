var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "tick.png";
    }else{
        icon.src = "moon.svg";
    }
}

// ------------------------------------------------------ //

let pic = document.querySelectorAll('.mainpic');
let index=0;
function next(){
    pic[index].classList.remove('active');
    index = (index + 1)%pic.length;
    pic[index].classList.add('active');
}

function prev(){
    pic[index].classList.remove('active');
    index = (index - 1 + pic.length)%pic.length;
    pic[index].classList.add('active');
}

// ------------------------------------------------------ //

function menuBtn(){
    document.getElementById('sidebar').classList.toggle('active');
}

// ------------------------------------------------------ //

window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop'); 
    scroll.classList.toggle("active", window.scrollY > 800)
})
  



function toggleMenu(){
    document.getElementById("navToggle").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}






















































































































let sliderIndex = 0
function sliderRight() {
    if (sliderIndex == 3){
        sliderIndex=0;
    } else{
        sliderIndex++;
    }
    document.getElementById("slider").style = `transform:translateX(-${sliderIndex * 25}%) `
}
function sliderLeft() {
    if (sliderIndex == 0){
        sliderIndex=3;
    } else {
        sliderIndex--;
    }
    document.getElementById("slider").style = `transform:translateX(-${sliderIndex * 25}%) `
}





















































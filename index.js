const x1= document.querySelectorAll(".toggle");
const y=document.querySelectorAll(".btn-txt");
const z=document.querySelectorAll(".btn-img");
change=()=>{
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme"))
    {
        y[0].textContent="Bright Mode";
        y[1].textContent="Bright Mode";
        z[0].src="sun.png";
        z[1].src="sun.png";
        
    }
    else{
        y[0].textContent="Dark Mode";
        y[1].textContent="Dark Mode";
        z[0].src="moon.png"; 
        z[1].src="moon.png"; 
    }
}
x1.forEach(function(btn){
    btn.onclick=change;
});


const header= document.querySelector("#header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
});

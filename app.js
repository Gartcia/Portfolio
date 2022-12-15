const toggle = document.querySelector(".toggle");
const menuBurger = document.querySelector(".menu-button");
const navConteiner = document.querySelector(".nav");
const linksConteiner = document.querySelector(".li-conteiner");
const navLinks = document.querySelectorAll(".scroll-link");
const headConteiner = document.querySelector(".head-conteiner");
const about = document.getElementById("about");
const backToTop = document.querySelector(".back-top");
const recuadro = document.querySelector(".conteiner-slides");
const slide = document.querySelector(".grid");
const preNextBtn = document.querySelectorAll(".arrow");
const close = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay")
const preloader = document.querySelector(".preloader-conteiner")
const projects = [
    {
        name: "Colour Shifter",
        img:"images/colour-shifter.png",
        link:"https://gartcia.github.io/Colour-Shifter/",
    },
    {
        name: "Video",
        img:"images/video.png",
        link:"https://gartcia.github.io/Video/",
    },
    {
        name: "Menu",
        img:"images/menu.png",
        link:"https://gartcia.github.io/Menu/",
    },
    {
        name: "Scroll",
        img:"images/Scroll.png",
        link:"https://gartcia.github.io/Scroll/",
    },
    {
        name: "Modal",
        img:"images/Modal.png",
        link:"https://gartcia.github.io/Modal/",
    },
    {
        name: "Questions",
        img:"images/Questions.png",
        link:"https://gartcia.github.io/Questions/",
    },
]

//This is the email send
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_i3xt3ty';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      modal.style.visibility = "visible";
      modal.style.zIndex = 999;
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});

close.addEventListener("click", function(){
    modal.style.visibility = "hidden";
    modal.style.zIndex = -10;
})

//Here finish the email send

toggle.addEventListener("click", function(){
    const conteinerHeight = navConteiner.getBoundingClientRect().height;
    const linksHeight = linksConteiner.getBoundingClientRect().height;

    if(conteinerHeight === 0){
        navConteiner.style.height = `${linksHeight}px`;
    } else {
        navConteiner.style.height = `0px`;
    }
    menuBurger.classList.toggle("menu-buttonx");
})

window.addEventListener("scroll", function(){
    const scrollHeight = window.scrollY;
    const conteinerHeight = headConteiner.getBoundingClientRect().height;
    const position = about.offsetHeight - conteinerHeight;

    if (scrollHeight > conteinerHeight){
        headConteiner.classList.add("fixed-nav");
    } else {
        headConteiner.classList.remove("fixed-nav");
    }
    if (scrollHeight > position){
        backToTop.classList.add("fixed-back-to-top");
    } else {
        backToTop.classList.remove("fixed-back-to-top");
    }
})

navLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const conteinerHeight = headConteiner.getBoundingClientRect().height; 
        const navHeight = navConteiner.getBoundingClientRect().height;
        // i take out the height of the .li-conteiner and add the height of the real header
        let position = element.offsetTop - conteinerHeight + navHeight;
        window.scrollTo({
            left: 0,
            top: position,
        })
        if(navHeight !== 0){
            navConteiner.style.height = `0px`;
            menuBurger.classList.toggle("menu-buttonx");
        }
        if(window.innerWidth >= 650){
        navConteiner.style.height = `100%`;
        button.classList.remove("menu-buttonx");
        }
    })
})

window.addEventListener("DOMContentLoaded", function(){
    displayProjects(projects);
})

//Scroll One//


const displayProjects = function(projects){
    const anyProject = projects.map(function(project){
        return `<a class="a-projects" href="${project.link}" target="_blank">
        <h3>${project.name}</h3>
        <img class="img-project" src="${project.img}" alt="${project.name}">
        </a>`
    }).join("");
    slide.innerHTML = anyProject;
}

//Finish Scroll One//

//Preloader//

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
})

//Preloader//

//Change color variables//

var root = document.querySelector(':root');
const Beige = "#F3EFE0";
const LightGrey = "#434242";
const DarkGrey = "#222222";
const LovelyGreen = "#22A39F";    
const changeColor = document.querySelector(".color-conteiner");

changeColor.addEventListener("click", function(){
    if(!changeColor.classList.contains("back")){
        root.style.setProperty('--clr-back', LovelyGreen);
        root.style.setProperty('--clr-back2', Beige);
        changeColor.classList.add("back");
    } else {
        root.style.setProperty('--clr-back', Beige);
        root.style.setProperty('--clr-back2', LovelyGreen);
        changeColor.classList.remove("back");
    }
})

//Change color variables//
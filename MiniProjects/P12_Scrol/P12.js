// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

/* navToggle.addEventListener("click",()=>{
    linksContainer.classList.toggle("show-links");
});
//But this functionality will work only if we have four links. If we add more than four links then it will only show only top four links as the height is set to 200px. So we need to first find the height dynamically.*/

navToggle.addEventListener("click",()=>{
    const containerHeight = linksContainer.getBoundingClientRect().height; //This function gives the height of links container.
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById('nav');
const toplink = document.querySelector(".top-link");

// ********** fixed navbar ************
window.addEventListener("scroll",()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight= navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }    

    if(scrollHeight > 500){
        toplink.classList.add("show-link");
    }
    else{
        toplink.classList.remove("show-link");

    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let pos = element.offsetTop - navHeight;

        if(!fixedNav){
            pos = pos - navHeight;
        }
        if(navHeight > 82){
            pos = pos + containerHeight;
        }
        window.scrollTo({
            left:0,
            top:pos,
        });
        linksContainer.style.height = 0;
    });
});
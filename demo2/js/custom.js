//sticky navbar
const collapse = document.querySelector('.navbar-toggler');
const sideNav = document.querySelector('.sideNav');

collapse.addEventListener('click', (event) => {
    document.querySelector('.sideNav').style.left = '0px';
    collapse.style.opacity = '0';
    event.stopPropagation();
});


window.addEventListener('click', () => {
    collapse.style.opacity = '1';
    document.querySelector('.sideNav').style.left = '-100%';
})


window.onload = function() {
    const menu = document.getElementById("navbar");
    const nav = document.querySelector("#navbar .container");
    const login = document.querySelector('.login');
    const brand = document.querySelector('.navbar-brand');

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.style.padding = "8px 15px";
        menu.classList.add("bg-light");
        menu.classList.remove("navbar-dark");
        menu.classList.add("navbar-light");
        document.querySelector("nav .navbar-brand").style.color = "#005874";
        login.style.color = "#005874";
    } else {
        nav.style.padding = "16px 15px";
    }
}

window.onscroll = function() {scrollNav()};

const scrollNav = () => {
    const menu = document.getElementById("navbar");
    const nav = document.querySelector("#navbar .container");
    const login = document.querySelector('.login');
    const brand = document.querySelector('.navbar-brand');

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.style.padding = "8px 15px";
        menu.classList.add("bg-light");
        menu.classList.remove("navbar-dark");
        menu.classList.add("navbar-light");
        login.style.color = "#005874";
    } else {
        nav.style.padding = "16px 15px";
        menu.classList.remove("bg-light");
        menu.classList.remove("navbar-light");
        menu.classList.add("navbar-dark");
        login.style.color = "white"
    }

    const brandcolor = () => {
        if (document.body.clientWidth < 992) {
            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                brand.style.color = '#005874';
            } else {
                brand.style.color = 'white';
            }
        } else {
            brand.style.color = '#005874';
        }
    }
    
    brandcolor();

    window.addEventListener('resize', () => {
        brandcolor();
    })
}








//============================
/*Smooth Scroll*/
//============================
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });






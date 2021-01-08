//sidenav
const collapse = document.querySelector('.navbar-toggler');
const sideNav = document.querySelector('.sideNav');

collapse.addEventListener('click', (event) => {
    console.log('clicked');
    document.querySelector('.sideNav').style.left = '0px';
    collapse.style.opacity = '0';
    event.stopPropagation();
});


window.addEventListener('click', () => {
    collapse.style.opacity = '1';
    document.querySelector('.sideNav').style.left = '-100%';
})

const navbarColor = () => {
    //after leaving section 2
    if($('.pp-section.active').hasClass('light-section')){
        $("#navbar").addClass("navbar-light");
        $("#navbar").removeClass("navbar-dark");
        $(".sosmed").addClass("sosmed-inverse");
        $(".contact").addClass("contact-inverse");
        $(".bottom-nav").addClass("bottom-nav-inverse");
    } else {
        $("#navbar").addClass("navbar-dark");
        $("#navbar").removeClass("navbar-light");
        $(".sosmed").removeClass("sosmed-inverse");
        $(".contact").removeClass("contact-inverse");
        $(".bottom-nav").removeClass("bottom-nav-inverse");
    }

    if($('.pp-section.active').hasClass('get-in-touch')) {
        document.querySelector('.navbar').style.backgroundColor = "transparent";
    } else {
        document.querySelector('.navbar').style.backgroundColor = '';
    }
}


$(document).ready(function() {
    $('#pagepiling').pagepiling({
        scrollingSpeed: 280,
        navigation: false,
        anchors: ['header', 'about', 'skills', 'journey', 'portofolio', 'contact'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            navbarColor();
        },
        afterRender: function(anchorLink, index){
            navbarColor();
        }
    });      
});

$(document).ready(function() {
    $('.experiencelist .dicoding').magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade',
        items: [
            {
                src: './img/doc/sertifikat_Membangun Progresif Web Apps.png'
            },
            {
                src: './img/doc/sertifikat_Fundamental Front End Web Development.png'
            },
            {
                src: './img/doc/sertifikat_Belajar Dasar Pemrograman Web.png'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
    $('.experiencelist .bdd').magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade',
        items: [
            {
                src: './img/doc/bdd.png'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
    $('.experiencelist .gilland').magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade',
        items: [
            {
                src: './img/GILLAND GANESHA 2016-COLOR.png'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
    $('.experiencelist .smk').magnificPopup({
        removalDelay: 300,
        mainClass: 'mfp-fade',
        items: [
            {
                src: './img/doc/ijazah.jpg'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
    $('.grid-item').magnificPopup({
        removalDelay: 300,
        mainClass: ['mfp-with-zoom'],
        type: 'image', // this is default type\

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});


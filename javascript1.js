/*functionchangebackgroundcolortobrown(){
    documentqueryselector("body").stylebackgriund = "brown"
}*/

// Väljer elementer från HTML
const slides = document.querySelectorAll(".carrousel-slide");
const nästabutton = document.getElementById("framBtn");
const förebutton = document.getElementById("bakBtn");

let currentslide = 0;

function showslide(index) {
    for (let n = 0; n < slides.length; n++) {
        if (n === index) {
            slides[n].classList.add('active'); // Visar aktiva slide
        } else {
            slides[n].classList.remove('active'); // Gömmer inaktiva slides
        }
    }
}

// Flyytar till nästa slide
nästabutton.addEventListener("click", () => {
    currentslide = (currentslide + 1) % slides.length; 
    showslide(currentslide);
});

förebutton.addEventListener("click", () => {
    currentslide = (currentslide - 1 + slides.length) % slides.length; 
    showslide(currentslide);
});


showslide(currentslide);

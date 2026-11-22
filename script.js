// =============================================
// SECTION REVEAL ANIMATION
// =============================================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// =============================================
// ACTIVE NAVIGATION LINK
// =============================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

// =============================================
// TYPEWRITER EFFECT
// =============================================

const heroTitle =
    document.querySelector(".hero h2");

const titleText =
    "Java Full Stack Developer";

if (heroTitle) {

    let index = 0;

    heroTitle.textContent = "";

    function typeEffect() {

        if (index < titleText.length) {

            heroTitle.textContent +=
                titleText.charAt(index);

            index++;

            setTimeout(typeEffect, 70);
        }
    }

    window.addEventListener("load", () => {
        typeEffect();
    });

}

// =============================================
// LOGO CLICK TO TOP
// =============================================

const logo =
    document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// =============================================
// DYNAMIC FOOTER YEAR
// =============================================

const yearElement =
    document.getElementById("current-year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}

// =============================================
// PAGE LOADED
// =============================================

console.log(
    "Manoj Patil Portfolio Loaded Successfully"
);
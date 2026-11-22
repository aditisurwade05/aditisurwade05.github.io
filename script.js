// =============================
// MOBILE NAVIGATION
// =============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu when link is clicked

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =============================
// CONTACT FORM
// =============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    alert(
        `Thank you, ${name}!\n\n` +
        `Your message has been submitted successfully.`
    );


    contactForm.reset();

});


// =============================
// ACTIVE NAVIGATION
// =============================

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});
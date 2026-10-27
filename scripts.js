// Typed intro
var typed = new Typed(".text",{
    strings:[" Software Engineer"," Backend Developer"," Data Enthusiast"," Sports Enthusiast"],
    typeSpeed:100,
    backSpeed:20,
    backDelay:500,
    loop:true
})

// Fun Facts
const facts = [
    "I'm fluent in 5 languages!",
    "I love BMW & Mercedes",
    "I am passionate about tech, investments, cars, motorcycles and MMA.",
    "I was the re-founder of the Muslim Student Association at Caldwell University.",
    "I was born in Pakistan, raised in Saudi Arabia, and came to the USA for college.",
    "I have worked across campus, including Campus Safety, Admissions, International Admissions, Student Engagement and Facilities."
];

let currentFactIndex = 0;

function showFunFact() {
    const factElement = document.getElementById("fun-fact");
    factElement.textContent = facts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % facts.length; // Loop back to start
}

// Change the fact every 5 seconds
setInterval(showFunFact, 5000);
showFunFact(); // Initialize the first fact

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme Toggle
const toggleButton = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
}

toggleButton.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Contact form: send through Formspree without leaving the page
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitBtn = document.getElementById("submit");

contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    formStatus.textContent = "Sending...";
    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: { Accept: "application/json" }
        });
        if (response.ok) {
            formStatus.textContent = "Thanks! Your message was sent.";
            contactForm.reset();
        } else {
            const data = await response.json().catch(() => ({}));
            formStatus.textContent = data.errors
                ? data.errors.map(err => err.message).join(", ")
                : "Something went wrong. Please email me directly.";
        }
    } catch (err) {
        formStatus.textContent = "Network error. Please email me directly.";
    }
    submitBtn.disabled = false;
});

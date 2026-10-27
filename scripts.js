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

// Contact form: open the visitor's mail client with the message filled in
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("yname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const body = `${message}\n\n${name} (${email})`;
    window.location.href = `mailto:mbinaamir@caldwell.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

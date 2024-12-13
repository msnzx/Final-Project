// Fun Facts 
var typed = new Typed(".text",{
    strings:[" Web Developer"," Software Developer"," Data Analyst"," Sports Enthusiast"],
    typeSpeed:100,
    backSpeed:20,
    backDelay:500,
    loop:true
})
const facts = [
    "I'm fluent in 5 languages!",
    "I love BMW & Mercedes",
    "I am passionate about about tech, investments, cars, motorcycles and MMA.",
    "I was the re-founder of the Muslim Student Association at Caldwell University.",
    "I was born in Pakistan, raised in Saudi Arabia, and came to USA for my college",
    "I have worked at various departments across campus, including: Campus Safety, Admissions, International Admissions, Student Engagement and Facilities "
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


// Theme Toggle

const toggleButton = document.getElementById("theme-btn")
const lsTheme = localStorage.getItem("theme")

document.addEventListener("DOMContentLoaded", () => {
    if (lsTheme !== undefined || lsTheme !== null) {
        if (lsTheme == "light") {
            document.body.classList.add("light-theme");
        } else {
            document.body.classList.remove("light-theme");
        }
    } 
})

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    console.log(lsTheme)

     if (lsTheme == undefined || lsTheme == null) {
        localStorage.setItem('theme', 'light')
    } else if (lsTheme == "light") {
            localStorage.setItem('theme', 'dark')
        } 
    else {
        localStorage.setItem('theme', 'light')
    }
    

});



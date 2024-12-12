// Fun Facts Carousel
var typed = new Typed(".text",{
    strings:[" Web Developer"," Software Developer"," Data Analyst"," Sports Enthusiast"],
    typeSpeed:100,
    backSpeed:20,
    backDelay:500,
    loop:true
})
const facts = [
    "I'm fluent in 5 languages!",
    "I am passionate about about tech, investments, cars, motorcycles and MMA.",
    "I was the re-founder of the Muslim Student Association at Caldwell University.",
    "I achieved a 3.90 GPA while balancing work and leadership roles.",
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
    


    // if (document.body.classList.contains("light-theme")) {
    //     document.body.style.backgroundColor = "#ffffff";
    //     document.body.style.color = "#000000";
    //     document.header.style.backgroundColor = "#ffffff";
    //     document.header.style.color = "#000000";

    //     // Update all text elements to have black color
    //     document.querySelectorAll("*").forEach((element) => {
    //         if (window.getComputedStyle(element).color) {
    //             element.style.color = "#000000";
    //         }
    //     });
    // } else {
    //     document.body.style.backgroundColor = "#121212";
    //     document.body.style.color = "#ffffff";
    //     toggleButton.style.backgroundColor = "#00bcd4";
    //     toggleButton.style.color = "#ffffff";

    //     // Revert all text elements to white color
    //     document.querySelectorAll("*").forEach((element) => {
    //         if (window.getComputedStyle(element).color) {
    //             element.style.color = "#ffffff";
    //         }
    //     });
    // }


});



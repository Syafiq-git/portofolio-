// Typing animation
var typed = new Typed(".typing", {
    strings: ["FrontEnd Developer", "FrontEnd Developer", "UI Design", "Student"],
    typeSpeed: 20,
    backSpeed: 20,
    loop: true
});

// Side navigation
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section")
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")

}

function showSection(element) {
    // Remove "active" from all sections
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    // Add "active" to the target section
    const target = element.getAttribute("href");
    if (target) {
        const id = target.split("#")[1];
        const targetElement = document.querySelector("#" + id);
        if (targetElement) {
            targetElement.classList.add("active");
        }
    }
}

function updateNav(element) {
    console.log(element.getAttribute("href").split("#")[1]);
}

const hireMeButton = document.querySelector(".hire-me");
if (hireMeButton) {
    hireMeButton.addEventListener("click", function() {
        showSection(this);
        updateNav(this);
    });
}

// Nav toggler
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

if (navTogglerBtn) {
    navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
    });
}

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}
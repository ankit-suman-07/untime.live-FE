function toggleBurgerLines() {
    const top = document.querySelector(".burger-top");
    const mid = document.querySelector(".burger-mid");
    const low = document.querySelector(".burger-low");
    const navMenu = document.getElementById("navMenu");

    top.classList.toggle("burger-top-clicked");
    mid.classList.toggle("burger-mid-clicked");
    low.classList.toggle("burger-low-clicked");

    const currentRight = parseInt(getComputedStyle(navMenu).right);

    if (currentRight >= 0) {
        navMenu.style.right = "-2000px"; // Slide out
    } else {
        navMenu.style.right = "0px"; // Slide in
    }
}
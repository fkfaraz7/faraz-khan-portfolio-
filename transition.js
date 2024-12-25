
document.addEventListener("DOMContentLoaded", () => {
    const transitionPage = document.querySelector(".transition-page");

    if (transitionPage) {
        // Show transition page for a brief duration before navigating to the main page
        setTimeout(() => {
            transitionPage.style.display = "none";
        }, 2000); // Adjust the duration as needed (2 seconds here)
    }
});

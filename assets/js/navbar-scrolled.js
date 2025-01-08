document.addEventListener("scroll", function() {
    console.log("Scroll detected:", window.scrollY); // Tambahkan ini untuk debugging
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        console.log("Navbar class added");
    } else {
        navbar.classList.remove("scrolled");
        console.log("Navbar class removed");
    }
});

// Sticky Header Effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-bg");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle Search Bar Visibility
function toggleSearch() {
    const searchBar = document.getElementById("searchBar");
    const isHidden = searchBar.style.display === "none" || searchBar.style.display === "";
    searchBar.style.display = isHidden ? "block" : "none";
    if (isHidden) searchBar.focus();
}

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // Carousel Scroll Functionality
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (carousel && prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => carousel.scrollBy({ left: -window.innerWidth * 0.8, behavior: "smooth" }));
        nextBtn.addEventListener("click", () => carousel.scrollBy({ left: window.innerWidth * 0.8, behavior: "smooth" }));
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");

    let isDragging = false, startX, scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    carousel.addEventListener("mouseup", () => {
        isDragging = false;
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -250, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: 250, behavior: "smooth" });
    });
});
function toggleCart() {
    let cartOverlay = document.getElementById("cartOverlay");
    cartOverlay.classList.toggle("active");
}

// Open cart when clicking the cart icon
document.addEventListener("DOMContentLoaded", function () {
    let cartIcon = document.querySelector(".cart-icon");
    if (cartIcon) {
        cartIcon.addEventListener("click", toggleCart);
    }
});
function toggleMenu() {
    document.querySelector(".header-icons").classList.toggle("active");
}
function selectSize(btn) {
    // Remove active class from all buttons
    const buttons = btn.parentElement.querySelectorAll(".size-btn");
    buttons.forEach(button => button.classList.remove("active"));

    // Add active class to the clicked button
    btn.classList.add("active");
}


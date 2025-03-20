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
document.addEventListener("DOMContentLoaded", function () {
    const sizeFilter = document.getElementById("sizeFilter");
    const sortPrice = document.getElementById("sortPrice");
    const productsContainer = document.querySelector(".products-grid");
    let products = Array.from(productsContainer.children);

    // ✅ Filter Products by Size
    sizeFilter.addEventListener("change", function () {
        let selectedSize = sizeFilter.value;

        products.forEach(product => {
            let sizes = Array.from(product.querySelectorAll(".size-btn")).map(btn => btn.textContent);
            
            if (selectedSize === "all" || sizes.includes(selectedSize)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // ✅ Sort Products by Price
    sortPrice.addEventListener("change", function () {
        let sortedProducts;
        
        if (sortPrice.value === "lowToHigh") {
            sortedProducts = products.sort((a, b) => 
                parseFloat(a.querySelector("p").textContent.replace("₱", "")) - 
                parseFloat(b.querySelector("p").textContent.replace("₱", ""))
            );
        } else if (sortPrice.value === "highToLow") {
            sortedProducts = products.sort((a, b) => 
                parseFloat(b.querySelector("p").textContent.replace("₱", "")) - 
                parseFloat(a.querySelector("p").textContent.replace("₱", ""))
            );
        } else {
            sortedProducts = products; // Default order
        }

        // ✅ Reorder products in the DOM
        sortedProducts.forEach(product => productsContainer.appendChild(product));
    });
});
// Sample product list (you can replace this with dynamic data)
const products = [
    "Cherry Blossom", 
    "Hot Coral", 
    "Meadow", 
    "Splash", 
    "Midnight Black", 
    "Ocean Blue", 
    "Sunset Orange"
];

document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const dropdown = document.getElementById("searchDropdown");

    // Show dropdown when clicking on the search bar
    searchBar.addEventListener("click", function() {
        if (dropdown.children.length > 0) {
            dropdown.style.display = "block";
        }
    });

    // Show suggestions when typing
    searchBar.addEventListener("input", function() {
        let input = searchBar.value.toLowerCase();
        dropdown.innerHTML = ""; // Clear previous suggestions

        if (input.length === 0) {
            dropdown.style.display = "none";
            return;
        }

        let filteredProducts = products.filter(product => product.toLowerCase().includes(input));

        if (filteredProducts.length > 0) {
            dropdown.style.display = "block";
            filteredProducts.forEach(product => {
                let item = document.createElement("li");
                item.textContent = product;
                item.classList.add("dropdown-item");
                
                // When clicking a suggestion, it fills the search bar
                item.addEventListener("click", function() {
                    searchBar.value = product;
                    dropdown.style.display = "none";
                });

                dropdown.appendChild(item);
            });
        } else {
            dropdown.style.display = "none";
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!searchBar.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});

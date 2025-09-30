// Function to toggle visibility of navigation items
function toggleNavItems() {
    const navItems = document.querySelectorAll("nav ul li");
    navItems.forEach(item => {
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


document.getElementById("toggle-nav").addEventListener("click", toggleNavItems);


function invertColors() {
    const body = document.body;

    // Toggle the invert filter on the body
    if (body.style.filter === "invert(1)") {
        body.style.filter = "invert(0)"
    } else {
        body.style.filter = "invert(1)";
    }
}

document.getElementById("invert-colors").addEventListener("click", invertColors);
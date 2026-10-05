function showMessage() {

    alert("Project details will be added soon!");

}


/* Navbar active effect */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.style.color = "white";
        });

        this.style.color = "#3399ff";

    });

});


/* Welcome message in console */

console.log("Welcome to Katta Geeshma Teja Portfolio!");
window.onload = function() {
    document.getElementById("tandclink").classList.add("active");
    document.getElementById("tandc-container").classList.add("active");
}

navbar = document.querySelector(".nav-links").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function(){

        var tandc = document.getElementById("tandclink");
        var refund = document.getElementById("refundlink");
        var privacy = document.getElementById("privacylink");

        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");

        if (tandc.classList.contains("active")) {
            document.getElementById("tandc-container").classList.add("active")
        } else {
            document.getElementById("tandc-container").classList.remove("active")
        }
        if (refund.classList.contains("active")){
            document.getElementById("refund-container").classList.add("active")
        } else {
            document.getElementById("refund-container").classList.remove("active")
        }
        if (privacy.classList.contains("active")) {
            document.getElementById("privacy-container").classList.add("active")
        } else {
            document.getElementById("privacy-container").classList.remove("active")
        }
    })
})

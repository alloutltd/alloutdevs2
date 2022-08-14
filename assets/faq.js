window.onload = function() {
    document.getElementById("deliverylink").classList.add("active");
}

navbar = document.querySelector(".nav-links").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function(){

        var delivery = document.getElementById("tandclink");
        var refund = document.getElementById("refundlink");
        var myorder = document.getElementById("privacylink");
        var payments = document.getElementById("tandclink");
        var technical = document.getElementById("refundlink");

        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");

        if (delivery.classList.contains("active")) {
            document.getElementById("delivery-container").style.display="block";
            document.getElementById("refunds-container").style.display="none";
            document.getElementById("myorder-container").style.display="none";
            document.getElementById("payments-container").style.display="none";
            document.getElementById("technical-container").style.display="none";
        } else if (refund.classList.contains("active")) {
            document.getElementById("delivery-container").style.display="none";
            document.getElementById("refunds-container").style.display="block";
            document.getElementById("myorder-container").style.display="none";
            document.getElementById("payments-container").style.display="none";
            document.getElementById("technical-container").style.display="none";
        } else if (myorder.classList.contains("active")) {
            document.getElementById("delivery-container").style.display="none";
            document.getElementById("refunds-container").style.display="none";
            document.getElementById("myorder-container").style.display="block";
            document.getElementById("payments-container").style.display="none";
            document.getElementById("technical-container").style.display="none";
        } else if (payments.classList.contains("active")) {
            document.getElementById("delivery-container").style.display="none";
            document.getElementById("refunds-container").style.display="none";
            document.getElementById("myorder-container").style.display="none";
            document.getElementById("payments-container").style.display="block";
            document.getElementById("technical-container").style.display="none";
        } else if (technical.classList.contains("active")) {
            document.getElementById("delivery-container").style.display="none";
            document.getElementById("refunds-container").style.display="none";
            document.getElementById("myorder-container").style.display="none";
            document.getElementById("payments-container").style.display="none";
            document.getElementById("technical-container").style.display="block";
        }
    })
})
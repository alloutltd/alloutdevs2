function keepLocation(oldOffset) {
  if (window.pageYOffset!= null){
    st=oldOffset;
  }
  if (document.body.scrollWidth!= null){
    st=oldOffset;
  }
  setTimeout('window.scrollTo(0,st)',10);
}

window.onload = function() {
    document.getElementById("deliverylink").classList.add("active");
    document.getElementById("delivery-section").classList.add("active");
}

navbar = document.querySelector(".nav-links").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function(){

        var delivery = document.getElementById("deliverylink");
        var refund = document.getElementById("refundlink");

        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");

        if (delivery.classList.contains("active")) {
            document.getElementById("delivery-section").classList.add("active")
        } else {
            document.getElementById("delivery-section").classList.remove("active")
        }
        if (refund.classList.contains("active")){
            document.getElementById("refund-section").classList.add("active")
        } else {
            document.getElementById("refund-section").classList.remove("active")
        }
    })
})


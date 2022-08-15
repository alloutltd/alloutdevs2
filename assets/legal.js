 /* document.querySelectorAll('.legal-menu-item').forEach(a => {
    a.addEventListener('click', () => {
        a.classList.toggle('legal-menu-item--active');
    })
}) */


/*document.querySelectorAll('.legal-menu-item--active').forEach(a => {
    a.addEventListener('click', () => {
        const container = document.getElementById('tandc-container');
        const container2 = document.getElementById('refund-container');
        const container3 = document.getElementById('privacy-container');
        a.classList.toggle('legal-menu-item');

        getElementById('refundlink').className='legal-menu-item-2';
        getElementById('privacylink').className='legal-menu-item-3';


        if (a.classList.contains('legal-menu-item--active')) {
            container.style.display = "block";
            container2.style.display = "none";
            container3.style.display = "none";
        } else {
            container.style.display = "none";
        } 
    })
})
document.querySelectorAll('.legal-menu-item-2').forEach(a => {
    a.addEventListener('click', () => {
        const container = document.getElementById('refund-container');
        const container2 = document.getElementById('tandc-container');
        const container3 = document.getElementById('privacy-container');
        a.classList.toggle('legal-menu-item-2--active'); 

        getElementById('tandclink').className='legal-menu-item';
        getElementById('privacylink').className='legal-menu-item-3';

        if (a.classList.contains('legal-menu-item-2--active')) {
            container.style.display = "block";
            container2.style.display = "none";
            container3.style.display = "none";
        } else {
            container.style.display = "none";
        }
    })
})
document.querySelectorAll('.legal-menu-item-3').forEach(a => {
    a.addEventListener('click', () => {
        const container = document.getElementById('privacy-container');
        const container2 = document.getElementById('tandc-container');
        const container3 = document.getElementById('refund-container');
        a.classList.toggle('legal-menu-item-3--active');

        getElementById('refundlink').className='legal-menu-item-2';
        getElementById('tandclink').className='legal-menu-item';

        if (a.classList.contains('legal-menu-item-3--active')) {
            container.style.display = "block";
            container.style.display = "block";
            container2.style.display = "none";
            container3.style.display = "none";
        } else {
            container.style.display = "none";
        }
    })
})*/

window.onload = function() {
    document.getElementById("tandclink").classList.add("active");
    document.getElementById("tandc-container").classList.add("active")
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

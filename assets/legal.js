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


navbar = document.querySelector(".nav-links").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
    element.addEventListener("click", function(){

        var tandc = document.getElementById("tandclink");
        var refund = document.getElementById("tandclink");
        var privacy = document.getElementById("tandclink");

        navbar.forEach(nav=>nav.classList.remove("active"))
        console.log("class1" + tandc.classList);

        this.classList.add("active");
        console.log("class2" + tandc.classList);

        if (tandc.classList.contains("active")) {
            document.getElementById("tandc-container").style.display="block";
        } else {
            document.getElementById("tandc-container").style.display="none";
        }
        if (refund.classList.contains("active")) {
            document.getElementById("refund-container").style.display="block";
        } else {
            document.getElementById("refund-container").style.display="none";
        }
        if (privacy.classList.contains("active")) {
            document.getElementById("privacy-container").style.display="block";
        } else {
            document.getElementById("privacy-container").style.display="none";
        }
    })
})
 /* document.querySelectorAll('.legal-menu-item').forEach(a => {
    a.addEventListener('click', () => {
        a.classList.toggle('legal-menu-item--active');
    })
}) */

document.querySelectorAll('.legal-menu-item').forEach(a => {
    a.addEventListener('click', () => {
        const container = document.getElementById('tandc-container');
        const menuItem2 = document.getElementById('refundlink');
        const menuItem3 = document.getElementById('privacylink');
        const container2 = document.getElementById('refund-container');
        const container3 = document.getElementById('privacy-container');
        a.classList.toggle('legal-menu-item--active');

        if (a.classList.contains('legal-menu-item--active')) {
            container.style.display = "block";
            menuItem2.style.color = "black";
            menuItem3.style.color = "black";
            container2.style.display = "none";
            container3.style.display = "none";
        } else {
            container.style.display = "none";
        }
    })
})
document.querySelectorAll('.legal-menu-item-2').forEach(a => {
    a.addEventListener('click', () => {
        const container2 = document.getElementById('refund-container');
        a.classList.toggle('legal-menu-item-2--active');

        if (a.classList.contains('legal-menu-item-2--active')) {
            container2.style.display = "block";
        } else {
            container2.style.display = "none";
        }
    })
})
document.querySelectorAll('.legal-menu-item-3').forEach(a => {
    a.addEventListener('click', () => {
        const container3 = document.getElementById('privacy-container');
        a.classList.toggle('legal-menu-item-3--active');

        if (a.classList.contains('legal-menu-item-3--active')) {
            container3.style.display = "block";
        } else {
            container3.style.display = "none";
        }
    })
})
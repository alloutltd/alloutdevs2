 /* document.querySelectorAll('.legal-menu-item').forEach(a => {
    a.addEventListener('click', () => {
        a.classList.toggle('legal-menu-item--active');
    })
}) */

document.querySelectorAll('.legal-menu-item').forEach(a => {
    a.addEventListener('click', () => {
        const container = document.getElementById('tandc-container');
        a.classList.toggle('legal-menu-item--active');

        if (a.classList.contains('legal-menu-item--active')) {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    })
})
document.querySelectorAll('.legal-menu-item-2').forEach(a => {
    a.addEventListener('click', () => {
        const container = document.getElementById('refund-container');
        a.classList.toggle('legal-menu-item--active');

        if (a.classList.contains('legal-menu-item-2--active')) {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    })
})
document.querySelectorAll('.legal-menu-item-3').forEach(a => {
    a.addEventListener('click', () => {
        const container = document.getElementById('privacy-container');
        a.classList.toggle('legal-menu-item--active');

        if (a.classList.contains('legal-menu-item-3--active')) {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    })
})
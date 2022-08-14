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
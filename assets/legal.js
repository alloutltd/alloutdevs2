document.querySelectorAll('.legal-menu-item').forEach(a => {
    a.addEventListener('click', () => {
        a.classList.toggle('legal-menu-item--active');
    })
})
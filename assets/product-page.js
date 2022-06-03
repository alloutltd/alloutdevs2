function showSection(element) {
    var x = document.getElementById(element);
    if (x.style.display != 'block') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function keepLocation(oldOffset) {
if (window.pageYOffset!= null){
st=oldOffset;
}
if (document.body.scrollWidth!= null){
st=oldOffset;
}
setTimeout('window.scrollTo(0,st)',10);
}


if (window.matchMedia("(min-width: 1441px").matches) {
window.onload = function() {
if(window.location.href.split('#')[1] == 'terms-and-conditions') {
document.getElementById("tandclink").classList.add("active");
document.getElementById("tandc-container").classList.add("active");
} else if(window.location.href.split('#')[1] == 'refund-policy') {
document.getElementById("refundlink").classList.add("active");
document.getElementById("refund-container").classList.add("active");
} else if(window.location.href.split('#')[1] == 'privacy-policy') {
document.getElementById("privacylink").classList.add("active");
document.getElementById("privacy-container").classList.add("active");
} 
}

navbar = document.querySelector(".nav-links").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element => {
element.addEventListener("click", function(){

    var termsAndConditions = document.getElementById("tandclink");
    var refundPolicy = document.getElementById("refundlink");
    var privacyPolicy = document.getElementById("privacylink");

    navbar.forEach(nav=>nav.classList.remove("active"))

    this.classList.add("active");

    if (termsAndConditions.classList.contains("active")) {
        document.getElementById("tandc-container").classList.add("active")
    } else {
        document.getElementById("tandc-container").classList.remove("active")
    }
    if (refundPolicy.classList.contains("active")){
        document.getElementById("refund-container").classList.add("active")
    } else {
        document.getElementById("refund-container").classList.remove("active")
    }
    if (privacyPolicy.classList.contains("active")){
        document.getElementById("privacy-container").classList.add("active")
    } else {
        document.getElementById("privacy-container").classList.remove("active")
    }
})
})
} else {
window.onload = function() {

    var select = document.getElementById("legalCategories");
    var value = select.options[select.selectedIndex].value;

    console.log('this is the value: ' + value);

    if(window.location.href.split('#')[1] == 'terms-and-conditions') {
        select.value.remove;
        select.value = 'termsAndConditions';
        console.log(value);
        document.getElementById("tandc-container").classList.add("active");
    } else if(window.location.href.split('#')[1] == 'refund-policy') {
        select.value.remove;
        select.value = 'refund';
        console.log(value);
        document.getElementById("refund-container").classList.add("active");
    } else if(window.location.href.split('#')[1] == 'privacy-policy') {
        select.value.remove;
        select.value = 'privacy';
        console.log(value);
        document.getElementById("privacy-container").classList.add("active");
    }
}

function valChange() {

var select = document.getElementById("legalCategories");
var value = select.options[select.selectedIndex].value;

if (value == 'termsAndConditions') {
    document.getElementById("tandc-container").classList.add("active")
    } else {
    document.getElementById("tandc-container").classList.remove("active")
    }
    if (value == 'refund') {
    document.getElementById("refund-container").classList.add("active")
    } else {
    document.getElementById("refund-container").classList.remove("active")
    }
    if (value == 'privacy'){
    document.getElementById("privacy-container").classList.add("active")
    } else {
    document.getElementById("privacy-container").classList.remove("active")
    }
}    
}



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
    if(window.location.href.split('#')[1] == 'delivery') {
      document.getElementById("deliverylink").classList.add("active");
      document.getElementById("delivery-section").classList.add("active");
    } else if(window.location.href.split('#')[1] == 'refunds') {
      document.getElementById("refundlink").classList.add("active");
      document.getElementById("refund-section").classList.add("active");
    } else if(window.location.href.split('#')[1] == 'my-order') {
      document.getElementById("orderlink").classList.add("active");
      document.getElementById("myorder-section").classList.add("active");
    } else if(window.location.href.split('#')[1] == 'products') {
      document.getElementById("productslink").classList.add("active");
      document.getElementById("products-section").classList.add("active");
    } else if(window.location.href.split('#')[1] == 'payments') {
      document.getElementById("paymentlink").classList.add("active");
      document.getElementById("payments-section").classList.add("active");
    } else if(window.location.href.split('#')[1] == 'technical') {
      document.getElementById("technicallink").classList.add("active");
      document.getElementById("technical-section").classList.add("active");
    }
  }
  navbar = document.querySelector(".nav-links").querySelectorAll("a");
  console.log(navbar);

  navbar.forEach(element => {
  element.addEventListener("click", function(){

  var delivery = document.getElementById("deliverylink");
  var refund = document.getElementById("refundlink");
  var myorder = document.getElementById("orderlink");
  var products = document.getElementById("productslink");
  var payments = document.getElementById("paymentlink");
  var technical = document.getElementById("technicallink");

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
  if (myorder.classList.contains("active")){
    document.getElementById("myorder-section").classList.add("active")
  } else {
    document.getElementById("myorder-section").classList.remove("active")
  }
  if (products.classList.contains("active")){
    document.getElementById("products-section").classList.add("active")
  } else {
    document.getElementById("products-section").classList.remove("active")
  }
  if (payments.classList.contains("active")){
    document.getElementById("payments-section").classList.add("active")
  } else {
    document.getElementById("payments-section").classList.remove("active")
  }
  if (technical.classList.contains("active")){
    document.getElementById("technical-section").classList.add("active")
  } else {
    document.getElementById("technical-section").classList.remove("active")
  }

  })

  })
} else {

    window.onload = function() {

        var select = document.getElementById("faqCategories");
        var value = select.options[select.selectedIndex].value;

        console.log('this is the value: ' + value);

        if(window.location.href.split('#')[1] == 'delivery') {
          console.log(value);
          document.getElementById("delivery-section").classList.add("active");
        } else if(window.location.href.split('#')[1] == 'refunds') {
          console.log(value);
          document.getElementById("refund-section").classList.add("active");
        } else if(window.location.href.split('#')[1] == 'my-order') {
          console.log(value);
          document.getElementById("myorder-section").classList.add("active");
        } else if(window.location.href.split('#')[1] == 'products') {
            console.log(value);
            document.getElementById("products-section").classList.add("active");
        } else if(window.location.href.split('#')[1] == 'payments') {
            console.log(value);
            document.getElementById("payments-section").classList.add("active");
        } else if(window.location.href.split('#')[1] == 'technical') {
            console.log(value);
            document.getElementById("technical-section").classList.add("active");
        }
}

function valChange() {
    
    var select = document.getElementById("faqCategories");
    var value = select.options[select.selectedIndex].value;

    if (value == 'delivery') {
        document.getElementById("delivery-section").classList.add("active")
      } else {
        document.getElementById("delivery-section").classList.remove("active")
      }
      if (value == 'refund') {
        document.getElementById("refund-section").classList.add("active")
      } else {
        document.getElementById("refund-section").classList.remove("active")
      }
      if (value == 'order'){
        document.getElementById("myorder-section").classList.add("active")
      } else {
        document.getElementById("myorder-section").classList.remove("active")
      }
      if (value == 'products'){
        document.getElementById("products-section").classList.add("active")
      } else {
        document.getElementById("products-section").classList.remove("active")
      }
      if (value == 'payments'){
        document.getElementById("payments-section").classList.add("active")
      } else {
        document.getElementById("payments-section").classList.remove("active")
      }
      if (value == 'technical'){
        document.getElementById("technical-section").classList.add("active")
      } else {
        document.getElementById("technical-section").classList.remove("active")
      }

  }    
}







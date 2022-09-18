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
    if(window.location.href.split('#')[1] == 'product-description') {
      document.getElementById("descriptionLink").classList.add("active");
      document.getElementById("descriptionSection").classList.add("active");
     } else if(window.location.href.split('#')[1] == 'product-features') {
      document.getElementById("productFeaturesLink").classList.add("active");
      document.getElementById("productFeaturesSection").classList.add("active");
     } else if(window.location.href.split('#')[1] == 'product-materials') {
      document.getElementById("materialsLink").classList.add("active");
      document.getElementById("materialsSection").classList.add("active");
     } else if(window.location.href.split('#')[1] == 'product-care-instructions') {
      document.getElementById("careInstructionsLink").classList.add("active");
      document.getElementById("careInstructionsSection").classList.add("active");
     } else if(window.location.href.split('#')[1] == 'product-size-and-fit') {
      document.getElementById("sizeAndFitLink").classList.add("active");
      document.getElementById("sizeAndFitSection").classList.add("active");
     }
    }
    
    navbar = document.querySelector(".product-info-links").querySelectorAll("a");
    console.log(navbar);
    
    navbar.forEach(element => {
      element.addEventListener("click", function(){
    
          var description = document.getElementById("deliverylink");
          var productFeatures = document.getElementById("refundlink");
          var materials = document.getElementById("orderlink");
          var careInstructions = document.getElementById("productslink");
          var sizeAndFit = document.getElementById("paymentlink");
    
          navbar.forEach(nav=>nav.classList.remove("active"))
    
          this.classList.add("active");
    
          if (description.classList.contains("active")) {
              document.getElementById("descriptionSection").classList.add("active")
          } else {
              document.getElementById("descriptionSection").classList.remove("active")
          }
          if (productFeatures.classList.contains("active")){
              document.getElementById("productFeaturesSection").classList.add("active")
          } else {
              document.getElementById("productFeaturesSection").classList.remove("active")
          }
          if (materials.classList.contains("active")){
              document.getElementById("materialsSection").classList.add("active")
          } else {
              document.getElementById("materialsSection").classList.remove("active")
          }
          if (careInstructions.classList.contains("active")){
              document.getElementById("careInstructionsSection").classList.add("active")
          } else {
              document.getElementById("careInstructionsSection").classList.remove("active")
          }
          if (sizeAndFit.classList.contains("active")){
              document.getElementById("sizeAndFitSection").classList.add("active")
          } else {
              document.getElementById("sizeAndFitSection").classList.remove("active")
          }
      })
    })
    
    
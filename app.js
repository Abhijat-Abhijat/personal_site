(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function postToGoogle() {
    var field1 = $("#Name").val();
    var field2 = $("#Email").val();
    var field3 = $("#Subject").val();
    var field4 = $("#Message").val();
    window.location.reload(true);
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeQWOnMCUWDMka_mgdVG09jZgZ94p8Z5p9piVNGh2VjhYnDYw/formResponse",
        
      //add your google form generated numbers below which are also the 'names' of your inputs     
      data: {
        "entry.1609556660": field1,
        "entry.782544567": field2,
        "entry.1780450920": field3,
        "entry.1151110127": field4
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact').trigger('reset');
      }
    });
    return false;
    
  }
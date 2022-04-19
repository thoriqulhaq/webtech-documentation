$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  
  $(document).ready(function() { 
    // on click, collapses description 
    $(".card").on("click", function() {
      $(this).find(".desc, .def").toggle(400);
      $(this).find(".name");
    });
  });
  
  

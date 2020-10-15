$(".icon-menu").click(function (event) {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  lightGallery(document.getElementById('sec4__rows')); 

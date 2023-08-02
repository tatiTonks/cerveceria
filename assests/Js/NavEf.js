$(".navdecoracion li a").each(function (index, element) {
  $(this).css({
    top: "-200px",
  });

  $(this).animate(
    {
      top: "0",
    },
    1000 + index * 300
  );
});

$("#btn-Polas").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 580,
    },
    500
  );
});

$("#btn-Microcervecerias").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 2450,
    },
    500
  );
});

$("#btn-Pubs").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 2850,
    },
    500
  );
});

$("#btn-Merch").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 3330,
    },
    500
  );
});

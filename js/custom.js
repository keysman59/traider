$(".trade,.invest,.attract").click(function() {

  $(".main").fadeOut(1380);
  $(".choose-menu").addClass("up-content");
  $(".flash").addClass("shine");
  $(".shine").fadeOut(1460);

});

$(window).resize(function() {
  if ( $(window).width() < 560 ) {

    $("#Trade").before($("#trade-new"));
    $("#Invest").before($("#invest-new"));
    $("#Attract").before($("#attract-new"));

  } else {

    $("#trade-new").appendTo($(".tab-block"));
    $("#invest-new").appendTo($(".tab-block"));
    $("#attract-new").appendTo($(".tab-block"));


  }
});

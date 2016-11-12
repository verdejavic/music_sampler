$(document).ready(function() {

  $("audio").each(function() {
      this.pause();
      this.currentTime=0;
  });

  function hideAll() {
    $("#goodgirl").hide();
    $("#history").hide();
    $("#echoboom").hide();
    $("#liarliar").hide();
    $("#goodgirlText").hide();
    $("#historyText").hide();
    $("#echoboomText").hide();
    $("#liarliarText").hide();
  }

  hideAll();

  $('.albumCovers').click(function() {
    hideAll();

    switch ($(this).attr("id")) {

        case "1":
    $('#goodgirl').show();
    $('#goodgirlText').slideToggle();
        break;

        case "2":
    $('#history').show();
    $('#historyText').show();
        break;    

        case "3":
    $('#echoboom').show();
    $('#echoboomText').slideToggle();
        break;

        case "4":
    $('#liarliar').show();
    $('#liarliarText').show();
        break;
    }
  });



});

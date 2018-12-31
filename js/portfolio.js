$(document).ready(function() {

  $('#all').click(function(){
    $('.all').show();
  });

  $('#bootstrap').click(function(){
    $('.all').hide();
    $('.bootstrap').fadeIn(1000);
  });

  $('#jQuery').click(function(){
    $('.all').hide();
    $('.jQuery').fadeIn(1000);
  });

  $('#react').click(function(){
    $('.all').hide();
    $('.react').fadeIn(1000);
  });

  $('#d3').click(function(){
    $('.all').hide();
    $('.d3').fadeIn(1000);
  });

  $('#python').click(function(){
    $('.all').hide();
    $('.python').fadeIn(1000);
  });

  $('#sql').click(function(){
    $('.all').hide();
    $('.sql').fadeIn(1000);
  });

  $('#flash').click(function(){
    $('.all').hide();
    $('.flash').fadeIn(1000);
  });

});

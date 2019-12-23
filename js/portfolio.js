$(document).ready(function() {

  $('#all').click(function(){
    $('.all').show();
  });

  var projectTypes = [
    'all',
    'python',
    'jQuery',
    'react',
    'd3',
    'flash',
    'nodejs'
  ];

  projectTypes.forEach(function (projectType) {
    $('#' + projectType).click(function(){
      $('.all').hide();
      $('.' + projectType).fadeIn(1000);
    });
  });

});

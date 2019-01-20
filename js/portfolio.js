$(document).ready(function() {

  $('#all').click(function(){
    $('.all').show();
  });

  var projectTypes = [
    'all',
    'bootstrap',
    'jQuery',
    'react',
    'd3',
    'python',
    'sql',
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

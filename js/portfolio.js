$(document).ready(function() {

  $('.all').hide();
  $('.best').show();

  var projectTypes = [
    'best',
    'python',
    'jQuery',
    'react',
    'd3',
    'nodejs',
    'simulations',
    'all',
  ];

  var projectTypeNames = [
    'My Best',
    'Python',
    'jQuery',
    'React',
    'd3',
    'Node.js',
    'Phaser3 and Flash',
    'All',
  ];

  projectTypes.forEach(function (projectType, i) {
    $('#' + projectType).click(function(){
      $('.all').hide();
      $('.' + projectType).fadeIn(1000);
      $('#projectTypeName').text(projectTypeNames[i] + ' Projects');
    });
  });


});

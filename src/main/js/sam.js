


/*

$('a.picLinks').click(function() {
    var picNumber = $(this).attr('id').split('_')[1]; 
    viewer.show(picNumber);
});


*/

$(document).ready(function(){

  // get the gallery conf and init templates

  $.getJSON('json/data.json', function(data) {
    jsonData = data;
  });

  var thumbnailTemplate = $('#tpl_thumbnail').html();
  Mustache.parse(thumbnailTemplate);

  var carousselTemplate = $('#tpl_caroussel').html();
  Mustache.parse(carousselTemplate);

  // init main tabs

  $('#navLinkPeinture').click(function() {
     initGallery($('#peintures'), jsonData.peintures, thumbnailTemplate, carousselTemplate);
  });

  $('#navLinkSculpture').click(function() {
    initGallery($('#sculptures'), jsonData.sculptures, thumbnailTemplate, carousselTemplate);
  });

  $('#navLinkNews').click(function() {
    $('#apercus').html('');
  });

  $('#navLinkContact').click(function() {
    $('#apercus').html('');
  });

});

function initGallery(galleryDiv, data, thumbnailTemplate, carousselTemplate) {
    var rendered = Mustache.render(thumbnailTemplate, data);
    $('#apercus').html(rendered);

    var renderCaroussel = Mustache.render(carousselTemplate, data);
    galleryDiv.html(renderCaroussel);
    galleryDiv.find('.carousel').find('.item').first().addClass('active');
    galleryDiv.find('.carousel').carousel();
}

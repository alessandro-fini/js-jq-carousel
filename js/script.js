$(document).ready(function () {
  
  $('.prev').click(previousImage);

  $('.next').click(nextImage);

  $(document).keydown(function(e){
    if (e.keyCode == 37) { // left
      previousImage();
    } else if (e.keyCode == 39) { // right
      nextImage();
    }
  });

});

/* funzioni */

function previousImage(){

  /* active image */
  var onImage = $('.images img.active');
  /* remove active from image */
  onImage.removeClass('active');  
  /* if onImage is the first image */
  if (onImage.hasClass('first')){
    /* add active to the last image */
    $('.images img.last').addClass('active');
  } else {
    /* add active to previous image */
    onImage.prev().addClass('active');
  }

  var onSelected = $('.nav i.active');

  onSelected.removeClass('active');

  if (onSelected.hasClass('first')){
    $('.nav i.last').addClass('active');
  } else {
    onSelected.prev().addClass('active');
  }

}

function nextImage(){

  /* active image */
  var onImage = $('.images img.active');
  /* remove active from image */
  onImage.removeClass('active');  
  /* if onImage is the last image */
  if (onImage.hasClass('last')){
    /* add active to the first image */
    $('.images img.first').addClass('active');
  } else {
    /* add active to next image */
    onImage.next().addClass('active');
  }

  var onSelected = $('.nav i.active');

  onSelected.removeClass('active');

  if (onSelected.hasClass('last')){
    $('.nav i.first').addClass('active');
  } else {
    onSelected.next().addClass('active');
  }
  
}
$(function() {
  let topBtn = $('#page-top');
  topBtn.click(function() {
    $('body, html').animate({scrollTop: 0}, 600, 'linear');
  });


  $('.slider').slick({
    arrows:false,
    asNavFor:'.thumb',
    slidesToShow:4,
});
$('.thumb').slick({
    asNavFor:'.slider',
    focusOnSelect: true,
    slidesToShow:4,
    slidesToScroll:1
});

});

let close = document.getElementById('close');
let fade =  document.getElementById('fade');
let back = document.getElementById('back');

let feed = document.getElementsByClassName('vertical')[0];

// モーダル
feed.addEventListener('click', function() {
  fade.style.display = "block";
  document.body.classList.add('stop');
});

back.addEventListener('click', function() {
  fade.style.display = "none";
  document.body.classList.remove('stop');
});

close.addEventListener('click', function() {
  fade.style.display = "none";
  document.body.classList.remove('stop');
});




// window.addEventListener('click', function(e) {
//   if(e.target === fade) {
//     fade.style.display = "none";
//     document.body.classList.remove('stop');
//   }
// });

// モーダル

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    $('html, body').animate({ scrollTop: destino.offset().top }, 2000);
    return false;
  });
});


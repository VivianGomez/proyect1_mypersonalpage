$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
    return false;
  });
});

  /* This code was inspired by https://code.i-harness.com/es/q/75c297 */


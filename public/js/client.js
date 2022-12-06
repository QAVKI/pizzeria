if (window.jQuery) {
  console.log('ok');
}

// выведем версию jQuery в консоль
if (window.jQuery) {
  var verJquery = jQuery.fn.jquery;
  console.log(verJquery);
}
jQuery.noConflict();
(function ($) {
  $(function () {
    particlesJS.load(
      'particles-js',
      '../assets/particles/particles.json',
      function () {
        console.log('callback - particles.js config loaded')
      }
    )
  });
})(jQuery);

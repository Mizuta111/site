(function ($) {

  // ハンバーガーメニュー

  var $nav = $('#navArea');
  var $btn = $('.toggle_btn');
  var $mask = $('#mask');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on('click', function () {
    $nav.removeClass(open);
  });

  //スムーズスクロール

  $('a[href^="#"]').on('click', function () {
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
  });

  //スクロールアニメーション

  $(window).on("scroll", function () {
    $('.thum').each(function (index, el) {
      if ($(window).scrollTop() > ($(el).offset().top - $(window).height() / 1.5)) {
        $(el).addClass('show');
      }
    });
  });

  //読み込み時にふわっと出す

  $(document).ready(function() {
    $('body').hide().fadeIn(3000);
  });
})(jQuery);

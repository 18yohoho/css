$(function() {
  $.ajax({
    url: '/18yohoho.github.io/header.html', // includeしたいファイルのパスを指定
    dataType: 'html', // htmlのまま
    success: function (data) {
      $('body').prepend(data);
    },
    error: function () {
      alert('header error!');
    },
  });
});
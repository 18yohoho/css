$(function() {
    $.ajax({
      url: '/18yohoho.github.io/header.html',
      dataType: 'html',
      success: function (data) {
        $('body').prepend(data);
      },
      error: function () {
        alert('header error!');
      },
    });
  });
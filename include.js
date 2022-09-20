function header(){
  $.ajax({
      url: "/18yohoho.github.io/header.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}

function footer(){
  $.ajax({
      url: "/18yohoho.github.io/footer.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}
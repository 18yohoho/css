function header(){
    $.ajax({
        url: "header.html",
        cashe: false,
        success: function(html){
            document.write(html);
        }
    });
}

function footer(){
    $.ajax({
        url: "footer.html",
        cashe: false,
        success: function(html){
            document.write(html);
        }
    });
}
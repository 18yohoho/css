function header(rootDir){
    $.ajax({
        url: rootDir + "/css/header.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}

function footer(rootDir){
    $.ajax({
        url: rootDir + "/css/footer.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}
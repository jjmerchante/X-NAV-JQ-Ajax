function getTextButton(){
    $.ajax('text2.txt')
        .done(function(data){
            $('#third').html(data);
        })
        .fail(function(data){
            $('#third').html("no se ha recibido nada")
        });
}

$(document).ready(function(){
    $.ajax('text1.txt')
        .done(function(data){
            $('#second').html(data)
        })
        .fail(function(data){
            $('#second').html("no se ha recibido nada")
        });
    $('#getText').click(getTextButton);
});

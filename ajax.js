function getText(){
    $.ajax('text1.txt')
        .done(function(data){
            $('#second').html(data);
        })
        .fail(function(){
            $('#second').html("no se ha recibido nada")
        });
}

$(document).ready(function(){
    $('#getText').click(getText);
});

$("form[data-contact='form']").submit(function(e){
    e.preventDefault();

    var $form = $(this);
    var postData = new FormData($form.get(0));

    $.ajax({
        cache : false,
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: postData,
        dataType: 'json',
        contentType: false,
        processData: false,
        beforeSend: function(){
            console.log("beforeSend");
        }
    })
    .always(function(data,status) {
        console.log(status);
        console.log(data);
    })
    .fail(function(data) {
        console.log(data);
    });

    return false;
})

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
        beforeSend: function(){}
    })
    .always(function(data,status) {
        if("success" == status)
        {
            $("#contact .box").css("-webkit-transform", "rotateX(180deg)");
            $("#contact .box").css("transform", "rotateX(180deg)");
        }
    })
    .fail(function(data) {
    });

    return false;
})

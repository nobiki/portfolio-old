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
            $("#contact").find("input[type='submit']").attr("disabled","disabled");
            $("#contact").find("input[type='submit']").fadeOut();
        }
    })
    .always(function(data,status) {
        if("success" == status)
        {
            $("#contact .box").css("-webkit-transform", "rotateX(180deg)");
            $("#contact .box").css("transform", "rotateX(180deg)");
        }else{
            $("#contact").find("input[type='submit']").removeAttr("disabled");
            $("#contact").find("input[type='submit']").show();
        }
    })
    .fail(function(data) {
        $("#contact").find("input[type='submit']").removeAttr("disabled");
        $("#contact").find("input[type='submit']").show();
    });

    return false;
})

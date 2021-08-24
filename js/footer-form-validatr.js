$(function() {
    $('#footer-submit-btn').click(function() {
        $('#re_call-footer').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                F_name: {
                    required: true
                },
                F_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#F_name').val();
                var number = $('input#F_tel').val();
                var dataString = 'to=' + to + '&F_name=' + fullname +'&F_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "footer-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-re_call-footer').fadeOut('slow');
                        $('#thanks-re_call-footer').modal('show');
                        $('#re_call-footer').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#re_call-footer').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});
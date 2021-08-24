$(function() {
    $('#contact-submit-btn').click(function() {
        $('#re_call-contact').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                CT_name: {
                    required: true
                },
                CT_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#CT_name').val();
                var number = $('input#CT_tel').val();
                var dataString = 'to=' + to + '&CT_name=' + fullname +'&CT_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "contact-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-re_call-contact').fadeOut('slow');
                        $('#thanks-re_call-contact').modal('show');
                        $('#re_call-contact').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#re_call-contact').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});
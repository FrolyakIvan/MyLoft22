$(function() {
    $('#certificate-submit-btn').click(function() {
        $('#re_call-certificate').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                C_name: {
                    required: true
                },
                C_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#C_name').val();
                var number = $('input#C_tel').val();
                var dataString = 'to=' + to + '&C_name=' + fullname +'&C_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "nav-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-re_call-certificate').fadeOut('slow');
                        $('#thanks-re_call-certificate').modal('show');
                        $('#re_call-certificate').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#re_call-certificate').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});
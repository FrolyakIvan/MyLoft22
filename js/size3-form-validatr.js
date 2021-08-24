$(function() {
    $('#size3-submit-btn').click(function() {
        $('#size3-modal-form').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                S3_name: {
                    required: true
                },
                S3_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#S3_name').val();
                var number = $('input#S3_tel').val();
                var dataString = 'to=' + to + '&S3_name=' + fullname +'&S3_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "size3-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-order-size3').fadeOut('slow');
                        $('#thanks-order-size3').modal('show');
                        $('#size3-modal-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#size3-modal-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});
$(function() {
    $('#size1-submit-btn').click(function() {
        $('#size1-modal-form').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                S_name: {
                    required: true
                },
                S_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#S_name').val();
                var number = $('input#S_tel').val();
                var dataString = 'to=' + to + '&S_name=' + fullname +'&S_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "size1-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-order-size1').fadeOut('slow');
                        $('#thanks-order-size1').modal('show');
                        $('#size1-modal-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#size1-modal-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});
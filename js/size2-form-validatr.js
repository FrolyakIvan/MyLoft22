$(function() {
    $('#size2-submit-btn').click(function() {
        $('#size2-modal-form').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                S2_name: {
                    required: true
                },
                S2_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#S2_name').val();
                var number = $('input#S2_tel').val();
                var dataString = 'to=' + to + '&S2_name=' + fullname +'&S2_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "size2-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-order-size2').fadeOut('slow');
                        $('#thanks-order-size2').modal('show');
                        $('#size2-modal-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#size2-modal-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});
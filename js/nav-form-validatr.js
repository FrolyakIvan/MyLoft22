$(function() {
    $('#nav-submit-btn').click(function() {
        $('#re_call-navbar').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                N_name: {
                    required: true
                },
                N_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#N_name').val();
                var number = $('input#N_tel').val();
                var dataString = 'to=' + to + '&N_name=' + fullname +'&N_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "nav-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-re_call-navbar').fadeOut('slow');
                        $('#thanks-re_call-navbar').modal('show');
                        $('#re_call-navbar').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#re_call-navbar').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});
$(function() {
    $('#present-submit').click(function() {
        $('#present-form').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                P_name: {
                    required: true
                },
                P_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#P_name').val();
                var number = $('input#P_tel').val();
                var dataString = 'to=' + to + '&P_name=' + fullname +'&P_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "present-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-order-present').modal('show');
                        $('#present-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#present-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});
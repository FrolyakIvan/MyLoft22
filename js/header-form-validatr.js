$(function() {
    $('#main-submit-btn').click(function() {
        $('#main-order-form').validate({
            errorClass: "error",
            validClass: "valid",
            rules: {
                H_name: {
                    required: true
                },
                H_tel: {
                    required: true,
                    number: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#H_name').val();
                var number = $('input#H_tel').val();
                var dataString = 'to=' + to + '&H_name=' + fullname +'&H_tel='+number+'';
                $.ajax({
                    type: "POST",
                    url: "header-mail.php",
                    data: dataString,
                    success: (function(data) {
                        $('#modal-order-main').fadeOut('slow');
                        $('#thanks-order-main').modal('show');
                        $('#main-order-form').trigger("reset");
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
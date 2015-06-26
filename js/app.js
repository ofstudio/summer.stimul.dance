;(function (document, window, $, undefined) {

    window.succsessSignup = function () {
        $('#signupSwitchProgress').hide();
        $('#signupSwitchSuccess').show();
        $("#ss-form")[0].reset();
    };
    
    function validate() {
        var valid = true;
        
        $('input[data-validation="required"]').each(function () {
            if ($(this).val().length < 1) {
                $(this).addClass('invalid');
                $(this).removeClass('valid');
                valid = false;
            } else {
                $(this).addClass('valid');
                $(this).removeClass('invalid');
            }
        });
        
        $('input[data-validation-if-checked]').each(function () {
            var checkbox = $('input[name="' + $(this).attr('data-validation-if-checked') + '"]');
            if ($(checkbox).prop('checked')){
                if ($(this).val().length < 1) {
                    $(this).addClass('invalid');
                    $(this).removeClass('valid');
                    valid = false;
                } else {
                    $(this).addClass('valid');
                    $(this).removeClass('invalid');
                }
            } else {
                $(this).addClass('valid');
                $(this).removeClass('invalid');
            }
        });
        
        return valid;
    }
    
    
    $(document).ready(function() {

        
        $('#ss-form').submit(function(event) {
            if (!validate()) {
                event.preventDefault();
                Materialize.toast('Заполните все поля формы!', 3000, 'toast');
            } else {
                $('#signup').openModal();
            }
        });
        
        
        
        
    });
    
    
    
    
})(document, window, jQuery);

$(document).ready(function(){
    $("#form-recuperacao").validate({
        rules:{
            email:{
                required: true,
                email:true
            }
        },
        submitHandler: function(form){
            alert("Email de recuperação de senha enviado com sucesso!")
        }
    })
})
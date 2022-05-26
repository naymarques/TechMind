$(document).ready(function(){
    $("#form-login").validate({
        rules:{
            email:{
                required: true,
                email:true
            },
            senha:{
                required: true
            }
        },
        submitHandler: function(form){
            alert("Login feito com sucesso!")
            location.assign('../../index.html')
        }
    })
})
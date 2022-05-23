
class View {

   print(id, func, idInvalido, msg) {
       $(id).attr('class', `form-control is-${func}`)
       $(idInvalido).text(msg)
   }

    cep(obj){
        $("#inputAddress").val(obj.logradouro);
        $("#inputBairro").val(obj.bairro);
        $("#inputCity").val(obj.localidade);
        $("#inputState").val(obj.uf);      
    }
    

}
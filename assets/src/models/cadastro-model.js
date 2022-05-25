class Model {

  constructor() {
        this.nome = $('#inputName'),
        this.email = $('#inputEmail1'),
        this.cEmail = $('#inputEmail2'),
        this.rg = $('#inputRg'),
        this.cep = $('#inputCep'),
        this.rua = $("#inputAddress"),
        this.bairro = $("#inputBairro"),
        this.cidade = $("#inputCity"),
        this.estado = $("#inputState"),
        this.senha1 = $('#inputPassword1')
        this.senha2 = $('#inputPassword2')
        this.msg = ''       
  }


  viaCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
      try{
       let apiResponse = fetch(url).then((response) =>            
            response.json())     
        return apiResponse
      } catch (e) {
        log('Cep não encontrado', e)
      }
    }

    validaCep() {
    const cep = this.cep.val();
    try {
      const regex = /^[0-9]{5}-?[0-9]{3}$/;
      if (cep.match(regex)) {
        this.viaCep(cep);
      } else if (cep == '') {
        this.msg = 'Digite um CEP'
        return 'invalid'
      } else {
        throw new Error("Digite um CEP Válido");
      }
    } catch (erro) {
      this.msg = erro
      return 'invalid'
    }
  }

  verificaNome(nome) {
        if (!nome){
            return ''
        } else if(nome.length < 10) { 
            return 'invalid'
        } else {        
            return 'valid'
        }
  }

  validaEmail (email) {
    const rgx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(email.match(rgx)) {
      return 'valid'
    } else if (email == ''){
      return ''
    }else {return 'invalid'}  
    
  }

  validaRG (rg) {
    const valid = /^[0-9]{8}-?[0-9]{1}$/;
    if(rg.match(valid)) {
      return 'valid'
    } else if(!rg){
      return ''
    } else {
      return 'invalid'
    }
  } 

  toEqual (val1, val2) {
    if(val1 != val2) {
      this.comparaView()
      return 'invalid'      
    } else if (val1 == val2) {
      return 'valid'
    } else {
      return ''
    }
  }


}

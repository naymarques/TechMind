
class Controller {

    
}

const model = new Model()
const view = new View()
const controller = new Controller()


jQuery(model.nome).change(() => {
    view.print(model.nome, model.verificaNome(model.nome.val()))
})

jQuery(model.email).change(() => {
    view.print(model.email, model.validaEmail(model.email.val()))
})

jQuery(model.cEmail).change(() => {
    view.print(model.cEmail, model.validaEmail(model.cEmail.val()))
})

jQuery(model.rg).keyup(() => {
    view.print(model.rg, model.validaRG(model.rg.val()))
})

jQuery(model.cep).change(() => {
    if(model.validaCep() == 'invalid') {
        view.print(model.cep, 'invalid',$('#cepInvalido'), model.msg)
    } else {
        view.print(model.cep, 'valid')
    }    
})

jQuery(model.senha2).change(() => {
    if(model.senhas(model.senha1.val(), model.senha2.val()) == 'invalid') {
        view.print(model.senha1, 'invalid', $('#password'), model.msg)
        view.print(model.senha2, 'invalid', $('#password'), model.msg)
    } else {
        view.print(model.senha1, 'valid')
        view.print(model.senha2, 'valid')
    }
})





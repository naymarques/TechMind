const model = new Model()
const view = new View()

class Controller {
    
    mandaView(id, func) {
    view.print(id, func)
    }

    async cepView() {
        if(model.validaCep() == 'invalid') {
            view.print(model.cep, 'invalid', $('#cepInvalido'), model.msg)
            view.cep('')
        } else {
            let api = await model.viaCep(model.cep.val())
            view.print(model.cep, 'valid')
            view.cep(api)
        }
    }

    comparaView() {
        if(model.toEqual(model.senha1.val(), model.senha2.val()) == 'invalid') {
            view.print(model.senha1, 'invalid', model.senha1, model.msg)
            view.print(model.senha2, 'invalid', model.senha2, model.msg)
        } else {
            view.print(model.senha1, 'valid')
            view.print(model.senha2, 'valid')
        } 
    }

}

    //instanciando a controller para usar os eventos
    const controller = new Controller()

    //Evento que verifica o nome do usuário
    jQuery(model.nome).change(() => {
        controller.mandaView(model.nome, model.verificaNome(model.nome.val()))
    })

    //Eventos que comparam os emails e imprimem na tela
    jQuery(model.email).change(() => {
        controller.mandaView(model.email, model.validaEmail(model.email.val()))
    })

    jQuery(model.cEmail).change(() => {
        controller.mandaView(model.cEmail, model.validaEmail(model.cEmail.val()))
    })

    //Evento do RG
    jQuery(model.rg).keyup(() => {
        controller.mandaView(model.rg, model.validaRG(model.rg.val()))
    })

    //Evento do CEP
    jQuery(model.cep).change(() => {
        controller.cepView()
    })

    //Eventos que comparam as senhas e imprimem na tela
    jQuery(model.senha1).change(() => {
        model.toEqual(model.senha1, model.senha2)
        controller.comparaView()
    })

    jQuery(model.senha2).keyup(() => {
        model.toEqual(model.senha1, model.senha2)
        controller.comparaView()
    })






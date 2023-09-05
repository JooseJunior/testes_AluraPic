describe ('Pagina de login, cenário de sucesso', () => {
    beforeEach(()=>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Deve realizar login com sucesso', () =>{
        cy.getByData('loginUserName').type('jose')
        cy.getByData('loginPassword').type('12345678')
        cy.getByData('loginBtn').click()
    })

    // it('Não deve permitir um e-mail em branco', () =>{
    //     cy.getByData('botao-login').click()
    //     // cy.getByData('email-input').type('jr@gmail')
    //     cy.getByData('senha-input').type('12345')
    //     cy.getByData('botao-enviar').click()
    //     cy.getByData('mensagem-erro').should('exist').and('have.text', "O campo email é obrigatório")
    // })

    // it('Não deve permitir um senha em branco', () =>{
    //     cy.getByData('botao-login').click()
    //     cy.getByData('email-input').type('jr@gmail')
    //     // cy.getByData('senha-input').type('12345')
    //     cy.getByData('botao-enviar').click()
    //     cy.getByData('mensagem-erro').should('exist').and('have.text', "O campo de senha é obrigatório")
    // })

    // it('Deve informar erro ao logar quando senha ou email estiver errado', () => {
    //     cy.getByData('botao-login').click()
    //     cy.getByData('email-input').type('Csblaytiosn@gmail.com')
    //     cy.getByData('senha-input').type('senha_errada')
    //     cy.getByData('botao-enviar').click()
    //     cy.get('.ModalLoginUsuario_modal__container__5xZrL').contains("E-mail ou senha incorretos")
    //     // cy.get('span').contains("E-mail ou senha incorretos")
        
    // })
    
    // it('Não deve permitir um email e senha em branco', () => {
    //     cy.getByData('botao-login').click()
    //     // cy.getByData('email-input').type('jr@gmail')
    //     // cy.getByData('senha-input').type('12345')
    //     cy.getByData('botao-enviar').click()
    //     // cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    //     cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatório')
    // })
    
    
    
})
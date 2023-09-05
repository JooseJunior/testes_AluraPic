describe ('Pagina de cadastro, cenário de cadastro com sucesso', () => {
    beforeEach(()=>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Deve realizar cadastro com sucesso', () =>{
        cy.getByData('register').click()
        cy.getByData('email').type('jose@gmail.com')
        cy.getByData('fullName').type('Jose Junior')
        cy.getByData('registerUserName').type('jose')
        cy.getByData('registerPassword').type('12345678')
        cy.getByData('btnRegister').click()
        // cy.getByData('mensagem-sucesso').should('exist').end('have.text', "Usuário cadastrado com sucesso!")
    })
})
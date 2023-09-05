describe ('Pagina de login, cenário incorreto', () => {
    beforeEach(()=>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Pagina de login, cenário incorreto', () =>{
        cy.getByData('loginUserName').type('erro')
        cy.getByData('loginPassword').type('erro')
        cy.getByData('loginBtn').click()

        cy.on('window:alert', (t) =>{
            expect(t).to.equal('Invalid user name or password')
        })
        
        cy.get('.text-danger').contains('User name is required!');
        cy.get('.text-danger').contains('Password is required!');

        // cy.contains('User name is required!').should('be.visible');
        // cy.contains('Password is required!').should('be.visible');
        // cy.getByData('mensagem-erro').should('exist').and('have.text', "O email digitado é inválido")
    })
    
})
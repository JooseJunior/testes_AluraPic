describe ('Pagina de cadastro, cenário de cadastro incorreto', () => {
    beforeEach(()=>{
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Deve verificar as mensagem de dados obrigatórios no cadastro', () =>{
        cy.getByData('register').click()
        cy.getByData('btnRegister').click();
        cy.getByData('btnRegister').click();

        cy.contains('Email is required!').should('be.visible');
        cy.contains('Full name is required!').should('be.visible');
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');

    })

    it('Deve verificar para cada campo msg do preenchimento incorreto', () =>{
        cy.getByData('register').click()
        cy.getByData('email').type('11')
        cy.getByData('fullName').type('a')
        cy.getByData('registerUserName').type('usuarioErrado')
        cy.getByData('registerPassword').type('Errado')
        cy.getByData('btnRegister').click()
        
        cy.contains('Invalid e-mail').should('be.visible');
        cy.contains('Mininum length is 2').should('be.visible');
        cy.contains('Must be lower case').should('be.visible');
        cy.contains('Mininum length is 8').should('be.visible');
        
    })
})
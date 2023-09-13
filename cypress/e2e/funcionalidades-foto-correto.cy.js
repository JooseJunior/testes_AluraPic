describe('Funcionalidades Foto, cenário de sucesso', () => {
  
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.getByData('loginUserName').type('jose')
      cy.getByData('loginPassword').type('12345678')
      cy.getByData('loginBtn').click()
    })
   
    it('Deve cadastrar com sucesso uma foto', () => {
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/simbol.jpg', {force:true})
      cy.get('[placeholder="photo description"]').type('Simbolo Viking')
      cy.get('[type="submit"]').click()
      cy.contains('Upload complete').should('be.visible')
      cy.get('.fa-home').click()
      cy.get('.img-thumbnail').should('have.length',1)      
    })

    it('Deve dar like e comentar na foto', () => {
      cy.get('.img-thumbnail').first().click()
      cy.get('.fa-heart-o').click()
      cy.wait(2000)
      cy.get('[formcontrolname="comment"]').type('Cultura nordica!')
      cy.get('[type="submit"]').click()
      cy.wait(2000)
      cy.get('.fa-home').click()
      
    })

    it('Deve Remover uma foto com sucesso', () => {
      cy.get('.img-thumbnail').first().click()
      cy.wait(2000)
      cy.get('.fa-trash-o').click()
      cy.contains('Photo removed').should('be.visible')
    })

    it('Deve Pesquisar uma foto entre duas opções', () => {
    
      /*Adicionar a primeira imagem*/
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/Odin.jpg', {force:true})
      cy.get('[placeholder="photo description"]').type('Simbolo Odin')
      cy.get('[type="submit"]').click()
      cy.contains('Upload complete').should('be.visible')
      cy.wait(2000)

      /*Adicionar a segunda imagem*/
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/lobo.jpg', {force:true})
      cy.get('[placeholder="photo description"]').type('Simbolo Lobo')
      cy.get('[type="submit"]').click()
      cy.contains('Upload complete').should('be.visible')

      /*Primeira pesquisa*/
      cy.get('[type="search"]').type('lobo')
      cy.wait(2000)
      cy.get('.img-thumbnail').first().click()
      cy.get('[class="text-left break-word"]').contains('Lobo')
      cy.wait(2000)
      cy.get('.fa-home').click()

      /*Segunda pesquisa*/
      cy.get('[type="search"]').type('Odin')
      cy.wait(2000)
      cy.get('.img-thumbnail').first().click()
      cy.get('[class="text-left break-word"]').contains('Odin')
      cy.wait(2000)
      cy.get('.fa-home').click()
      
      /*Apagar as imagens adicionadas no banco*/
      cy.wait(2000)
      cy.get('.img-thumbnail').first().click()
      cy.get('.fa-trash-o').click()
      cy.wait(2000)
      cy.get('.img-thumbnail').first().click()
      cy.get('.fa-trash-o').click()
    })

  })
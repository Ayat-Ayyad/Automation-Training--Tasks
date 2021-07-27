const URL = 'https://www.demoblaze.com/prod.html?idp_=14';
const cart = 'a.btn.btn-success.btn-lg';

export default class ProductPage {

    openUrl(){
        cy.visit(URL);
    };

    addToCart(){
        cy.get(cart).click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        })
        cy.on('window:confirm', () => true);
    };

    
}



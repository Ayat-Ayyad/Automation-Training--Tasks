import data from '../../fixtures/data.json'

const URL = 'https://www.demoblaze.com/index.html';
// const Monitors_Link = 
const Asus_Monitor = '[href="prod.html?idp_=14"]';
const Title = '[href="prod.html?idp_=14"]';
// const Price = '#tbodyid > div:nth-child(2) > div > div > h5';
// const Desc = '*id="article"'

export default class HomePage {

    openUrl(){
        cy.visit(URL);
    };

    clickOnMonitorLink(){
        // cy.get(Monitors_Link).click();
        cy.contains('a','Monitors').click();

    };

    verifyTitle(){
        cy.get(Title).should('contain', data.title)
    };

    verifyPrice(){
        cy.contains('h5', data.price).should('contain', data.price)
        // cy.get(Price).should('contain', data.price)
    };

    verifyDesc(){
        cy.contains( 'p', 'ASUS').should('contain', data.desc)
        // cy.get(Desc).should('contain', data.desc)
    };

    clickOnAsusMonitor(){
        cy.contains('a', data.title).click()

    }
    
}

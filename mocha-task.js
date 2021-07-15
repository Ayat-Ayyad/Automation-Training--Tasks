var assert = require('assert');

 describe ('Mocha Task- Fruit Shop', function(){

    before('before all tests', function(){
        console.log('excute before all tests');
    }); 
    beforeEach('before each test', function(){
        console.log('excute before each test');
    }); 
    after('after all tests', function(){
        console.log('excute after all tests');
    }); 
    afterEach('after each test', function(){
        console.log('excute after each test');
    }); 


    it('Cart Contains Four items', function(){
        
        var cart = ["Orange", "Banana", "Apple", "Strawberry"];
        var c = cart.length;
        assert.equal(c,4);
    });


    

    it('Second item in the cart', function(){
        var cart = ["Orange", "Banana", "Apple", "Strawberry"];
        var second = cart[1];

        assert.equal(second,"Banana");
    });


    it('Cart items are sorted alphabetically', function(){
        var cart = ["Orange", "Banana", "Apple", "Strawberry"];
        var c = cart.sort();
        var z= c.toString();
        assert.equal(z, 'Apple,Banana,Orange,Strawberry');
    });


    it('Add item & new count', function(){
        var cart = ["Orange", "Banana", "Apple", "Strawberry"];
        var c = cart.push("Mango")

        assert.equal(c,5);
    });

});
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
});

test("One dollar should be 106.6 yen", function(){
   
    const { fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(100)).toBe(10658); 
});

test("One Yen should be 0.0063 pound", function(){
    const {fromYentoPound} = require('./app.js')
    
    expect(fromYentoPound(100)).toBe(1); 
});
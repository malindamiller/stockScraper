var stock = require('../');

stock.getPrice('DIS', function(err, res) {
    if(err)
      console.log("error");
    console.log("Price:", res);
    });

stock.getName('DIS', function(err, res) {
    if(err)
        console.log("error");
    console.log("Name:", res);
      });

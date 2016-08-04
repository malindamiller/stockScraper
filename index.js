
var cheerio = require('cheerio');
var request = require('request');

exports.getPrice = function(stock, callback) {
  var base_url = 'http://www.marketwatch.com/investing/stock/';
  var fullUrl = base_url + stock;
      request(fullUrl, function(error, response, html){
        if(!error){
          var $ = cheerio.load(html);
            $('.pricewrap').filter(function(){
            var data = $(this);
            var price = data.children().last().text();
            callback(null, price);
              });
            }
      });
  };

  exports.getName = function(stock, callback) {
    var base_url = 'http://www.marketwatch.com/investing/stock/';
    var fullUrl = base_url + stock;
        request(fullUrl, function(error, response, html){
          if(!error){
            var $ = cheerio.load(html);
            var name = $('#instrumentname').text();
              callback(null, name);
              }
        });
    };

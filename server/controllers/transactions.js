var PaymentTransaction = require('../models/paymentTransferModel');
var uniqid = require('uniqid');


//Simple version, without validation or sanitation
// exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!');
// };



exports.test = function (req, res) {
  const dataa =     [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }]

    console.log("in side node js %%%%%%((((");
    res.send(dataa);
};


    // Get all transactions

exports.transaction_details = function (req, res, next) {
  console.log('Transaction Get details...');
  PaymentTransaction.find(function (err, transaction) {
      if (err) return next(err);
      res.send(transaction);
  })
};

exports.transaction_create = function (req, res, next) {
  console.log('Transaction Create...', req.body);
    var newTransaction = {
      transactionId: `transId${uniqid()}`,
      userName: req.body.userName,
      paymentMode: req.body.paymentMode,
      amount: req.body.amount,
  }
    var transaction = new PaymentTransaction(newTransaction);

    // Get new transactions

    transaction.save(function (err) {
        if (err) {
            // return new Error(err);
            return next(err);
        }
        PaymentTransaction.find(function (err, transaction) {
          if (err) return next(err);
          res.send(transaction);
      })    })
};


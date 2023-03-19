const express = require('express');

const app = express();

const port = 3001

app.listen(port, () => console.log(`app is started on port ${port}`));

app.use('/', (req, res, next) => {
    if (req.path === '/') {
      
        res.status(200).send({ 'test': true });
    } else {
        
        next();
  }
});

app.use('/data', (req, res, next) => {
    
    res.status(200).send(
        {
        "data": {
          "type": "invoices",
          "id": "1234",
          "attributes": {
            "invoice-number": "INV-001",
            "date": "2022-03-13",
            "amount": 100.00,
            "currency": "USD",
            "status": "paid"
          },
          "relationships": {
            "customer": {
              "data": {
                "type": "customers",
                "id": "5678"
              }
            },
            "line-items": {
              "data": [
                {
                  "type": "line-items",
                  "id": "1"
                },
                {
                  "type": "line-items",
                  "id": "2"
                }
              ]
            }
          }
        }
        }
    );
});
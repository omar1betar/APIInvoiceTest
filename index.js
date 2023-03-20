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

app.use('/customers', (req, res, next) => {

  res.status(200).send(
    {
      "customers": [
        {
          "id": "1",
          "name": "John Doe",
          "email": "johndoe@email.com",
          "phone": "555-123-4567",
          "address": "123 Main St",
          "city": "Anytown",
          "state": "CA",
          "zip": "12345"
        },
        {
          "id": "2",
          "name": "Jane Smith",
          "email": "janesmith@email.com",
          "phone": "555-234-5678",
          "address": "456 Oak St",
          "city": "Sometown",
          "state": "NY",
          "zip": "67890"
        },
        {
          "id": "3",
          "name": "Bob Johnson",
          "email": "bob.johnson@email.com",
          "phone": "555-345-6789",
          "address": "789 Elm St",
          "city": "Anyville",
          "state": "TX",
          "zip": "54321"
        },
        {
          "id": "4",
          "name": "Sarah Lee",
          "email": "sarah.lee@email.com",
          "phone": "555-456-7890",
          "address": "321 Pine St",
          "city": "Sometown",
          "state": "CA",
          "zip": "09876"
        },
        {
          "id": "5",
          "name": "Mark Jones",
          "email": "mark.jones@email.com",
          "phone": "555-567-8901",
          "address": "654 Maple St",
          "city": "Anytown",
          "state": "NY",
          "zip": "23456"
        }
      ]
    }
  );
});

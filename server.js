var express = require('express')
var app = express()
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())
app.use('/js', express.static(__dirname + '/js'));


var serveStatic = require('serve-static');
app.use(serveStatic(__dirname, {'index': ['header.html']}))

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fiatpunto26',
  database: 'world'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/products', function (req, res) {
 var stuff = [];
        connection.query('SELECT * FROM products', function(err, rows) {
        if ( err ){
            res.status(400).send('Error in database operation');
        } else {
            res.send(rows);
        }
    });
});

app.post('/products', function (req, res) {
    console.log(req.body);
    for(var i =0; i < req.body.length; i++) {
        connection.query('INSERT INTO orders SET ?', req.body[i], function(err, result) {
        console.log(err)  
    });
    return res;
    }
});


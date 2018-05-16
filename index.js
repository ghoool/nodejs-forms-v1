var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

// handle route for form post request, echo success message
app.post('/formsubmit', function(req, res){
    res.send('Thanks '+req.body.ufname+'! We will contact you soon at '+req.body.uemail);
})

app.listen(8080, function(){
    console.log('Server running on port 8080...');
});

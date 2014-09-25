var express = require('express');

var app = express();

app.get('/:variable', function(req, res) {
    res.render('test.ejs',{nomVar: req.params.variable});
});

app.listen(5555,'localhost');
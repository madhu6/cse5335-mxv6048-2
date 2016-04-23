var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
 


app.get('/getItems/:id', function(req, res, next) {
    var obj;
  var id = req.params.id;
  console.log("the id is"+id);
    
    MongoClient.connect('mongodb://mxv6048:4nv6cclfu1l950i645sqtvnmkb@ds019101.mlab.com:19101/heroku_q0r1p9xx', function(err, database) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");

myCollection= database.collection('test'); 
var k=parseInt(id);
myCollection.findOne({ID:k},function(err, result){
  if(err)
        console.log( err);
    else  
        console.log(result);
console.log(result.ID + ","+ result.CASREGNO +","+ result.CASRN +","+ result.ChemName);

 res.send(result); 
}); 

});
   
  
    
}); 


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



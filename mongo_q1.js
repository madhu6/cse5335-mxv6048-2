var prompt = require('prompt');
var MongoClient = require('mongodb').MongoClient;
var myCollection;


  prompt.start();

  prompt.get(['id'], function (err, input) {
    if (err) { console.log(err); }
      
      MongoClient.connect('mongodb://mxv6048:4nv6cclfu1l950i645sqtvnmkb@ds019101.mlab.com:19101/heroku_q0r1p9xx', function(err, database) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");

myCollection= database.collection('test'); 

var str=input.id;
var k=parseInt(str);


myCollection.findOne({CASREGNO:k},function(err, result){
console.log("mongod::   "+ result.ID +","+ result.CASREGNO +","+ result.CASRN+","+result.ChemName);

}); 

});
            
      
    });
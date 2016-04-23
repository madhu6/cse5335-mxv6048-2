var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var jsonData;
var myCollection;
fs.readFile('input.json', 'utf8', function (err, data) {
  if (err) throw err;
  jsonData= JSON.parse(data);
});
console.log(jsonData);
MongoClient.connect('mongodb://mxv6048:4nv6cclfu1l950i645sqtvnmkb@ds019101.mlab.com:19101/heroku_q0r1p9xx', function(err, database) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");
console.log(jsonData);
myCollection= database.collection('test');  
for(var i=0; i<101; i++){
var v1= {ID:jsonData[i].ID,CASREGNO:jsonData[i].CASREGNO,CASRN:jsonData[i].CASRN, ChemName:jsonData[i].ChemName };
myCollection.insert(v1,{w:1} ,function(err, result){
if(err)
console.log(err);
else{
console.log('inserted');
console.log(result);
}
});
}
   
    
});



    
    
    






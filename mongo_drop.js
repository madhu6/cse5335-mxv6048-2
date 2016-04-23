var MongoClient = require('mongodb').MongoClient;
var myCollection;
MongoClient.connect('mongodb://mxv6048:4nv6cclfu1l950i645sqtvnmkb@ds019101.mlab.com:19101/heroku_q0r1p9xx', function(err, database) {
    if(err)
        console.log( err);
    else
        console.log("connected to the mongoDB !");

myCollection= database.collection('test'); 
myCollection.drop();
});
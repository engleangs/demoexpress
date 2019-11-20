const mongo = require('mongodb');
const express = require('express');
const app = express();
const dbName = "db_demo"
url  = "mongodb://localhost:27017";
app.get('/', function (req, res) {
    var users = [];
    mongo.connect(url, {useNewUrlParser: true,  useUnifiedTopology: true }, (err, db) => {
        if(err) {
           console.log(err);
           process.exit(0);
        }
        console.log('database connected!');
        var dbo = db.db( dbName );
        dbo.collection("users").find().toArray((err,results)=>{
            if( err ) {
                console.log( err );
                res.send("NA");
            }
            else {
                users = results;
                 res.send( users );//no data
            }
        });
        
        //db.close();
    });
    
 });

 const server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
 

const MongoClient = require('mongodb').MongoClient;
//here we give the url
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb');
  }
  console.log('connected to mongo');
  db.close();
});

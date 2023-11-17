const solution = () => {
  var express = require('express');
  var app = express();
  var port=process.env.PORT;
  var host=process.env.HOST;
  app.listen(port,host,()=>{
    res.send("App listening  at " + port )
  })
  
};

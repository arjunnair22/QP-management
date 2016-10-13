var express = require('express')
var bodyParser = require("body-parser")
var path = require('path')

var app = express()
import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from '../modules/routes'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(path.join(__dirname, 'public')))
function getArrayFromSQLData(args,args1,args2) {
  // body...
  var result = args.map(function(obj){
      var robj = {};
      robj['value'] = obj[args1];
      robj['label'] = obj[args2];
      return robj;
  });
  return result;
};

var mysql      = require('mysql');

// send all requests to index.html so browserHistory works

app.post('/boards',(req,res)=>{
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'
});
connection.connect();

var results = {};
connection.query('SELECT * from board', function(err, boards, fields) {
  if (err) throw err;
  results=getArrayFromSQLData(boards,'boardId','boardName');
  res.json(JSON.stringify(results));
});

})


app.post('/medium',(req,res)=>{

  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'

});
  connection.connect();
var results = {};
connection.query('SELECT * from medium', function(err, medium, fields) {
  if (err) throw err;
  results=getArrayFromSQLData(medium,'mediumId','mediumName');
  res.json(JSON.stringify(results));
});


})

app.post('/standard',(req,res)=>{
  
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'

});
  connection.connect();
var results = {};
connection.query('SELECT * from standard', function(err, standard, fields) {
  if (err) throw err;
  results=getArrayFromSQLData(standard,'standardId','standardName');  
  res.json(JSON.stringify(results));
});


});

app.post('/subject',(req,res)=>{
  
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'

});
connection.connect();
var results = {};
if (req.body.standard != undefined && req.body.standard != undefined && req.body.standard != undefined) {

connection.query('SELECT * from subject', function(err, subject, fields) {
  if (err) throw err;
  results=getArrayFromSQLData(subject,'subjectId','subjectName');
  res.json(JSON.stringify(results));
});
}
else{
  res.end();
}
});

app.post('/testType',(req,res)=>{

  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'
});
connection.connect();
var results = {};
connection.query('SELECT * from testType', function(err, testtype, fields) {
  if (err) throw err;
  results=getArrayFromSQLData(testtype,'testTypeId','testType');
  res.json(JSON.stringify(results));
});
connection.end();

});



app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render  


      const appHtml = renderToString(<RouterContext {...props}/>)
      res.render('index.html', {appHtml:appHtml} )
    } 
    else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')

    }
  })
})
// function renderPage(appHtml) {
//   return `
//     <!doctype html public="storage">
//     <html>
//     <meta charset=utf-8/>
//     <title>My First React Router App</title>
//     <style>
//       @import "https://fonts.googleapis.com/css?family=Roboto";
//       @import "https://fonts.googleapis.com/icon?family=Material+Icons";
//       @import "https://npmcdn.com/react-mdl/extra/material.css";
//       @import "https://npmcdn.com/dialog-polyfill/dialog-polyfill.css";
//     </style>
//     <div id=app>${appHtml}</div>
//     <script src="https://npmcdn.com/react-mdl/extra/material.js"></script>
//     <script src="https://npmcdn.com/dialog-polyfill/dialog-polyfill.js"></script>
//     <script src="bundle.js"></script>
//    `
// }

app.listen(3000, () => console.log('Server running'));
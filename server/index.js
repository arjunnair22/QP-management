var express = require('express')
var path = require('path')
var app = express()
import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from '../modules/routes'

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
console.log('board')
var results = {};
connection.query('SELECT * from board', function(err, boards, fields) {
  if (err) throw err;
  results=getArrayFromSQLData(boards,'boardId','boardName');
  res.json(JSON.stringify(results));
});

})

app.post('/medium',(req,res)=>{
  console.log('board1')
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'

});
  connection.connect();
var results = {};
connection.query('SELECT * from medium', function(err, medium, fields) {
  if (err) throw err;
  results['medium']=getArrayFromSQLData(medium,'mediumId','mediumName');
  res.json(JSON.stringify(results));
});


})

app.post('/standard',(req,res)=>{
  console.log('board2')
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'

});
  connection.connect();
var results = {};
connection.query('SELECT * from standard', function(err, standard, fields) {
  if (err) throw err;
  results['standard']=getArrayFromSQLData(standard,'standardId','standardName');  
  res.json(JSON.stringify(results));
});


});

app.post('/subject',(req,res)=>{
  console.log('board3')
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'

});
  connection.connect();
var results = {};
connection.query('SELECT * from subject', function(err, subject, fields) {
  if (err) throw err;
  results['subject']=getArrayFromSQLData(subject,'subjectId','subjectName');
  res.json(JSON.stringify(results));
});


});

app.post('/testType',(req,res)=>{
console.log('board4')
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'qp'
});
connection.connect();
var results = {};
connection.query('SELECT * from testType', function(err, testtype, fields) {
  if (err) throw err;
  results['testtype']=getArrayFromSQLData(testtype,'testTypeId','testType');
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
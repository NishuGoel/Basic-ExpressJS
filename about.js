const express = require('express')
const info = require('./info.js')
const app = express()
exports.index=function(req, res){
    res.send("Index page");
}

exports.customers=function(req, res){
    res.send("Customers page");
}

exports.new=function(req, res){
    res.send("New page after passing custom middleware");
}



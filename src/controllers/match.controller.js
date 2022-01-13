'use strict';
const Match = require('../models/match.model');
exports.findAll = function(req, res) {
    
    Match.findAll(function(err, match) { 
        
        console.log('controller')  
        
        
        if (err)  res.send(err);  console.log('res', match);  res.send(match);
    
    });

};

exports.create = function(req, res) {const new_match = new Match(req.body);
    
    
    //handles null error
    
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){  res.status(400).send({ error:true, message: 'Please provide all required field' });}else{ Match.create(new_match, function(err, match) {  if (err)  res.send(err);  res.json({error:false,message:"Match added successfully!",data:match});});}};exports.findById = function(req, res) {Match.findById(req.params.id, function(err, match) {  if (err)  res.send(err);  res.json(match);});};exports.update = function(req, res) {  if(req.body.constructor === Object && Object.keys(req.body).length === 0){    res.status(400).send({ error:true, message: 'Please provide all required field' });  }else{    Match.update(req.params.id, new Match(req.body), function(err, match) {   if (err)   res.send(err);   res.json({ error:false, message: 'Match successfully updated' });});}};exports.delete = function(req, res) {Match.delete( req.params.id, function(err, match) {  if (err)  res.send(err);  res.json({ error:false, message: 'Match successfully deleted' });});};
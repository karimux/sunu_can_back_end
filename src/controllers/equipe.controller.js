'use strict';

const Equipe = require('../models/equipe.model');
exports.findAll = function(req, res) {
    
    Equipe.findAll(function(err, equipe) { 
        
        console.log('controller')  
        
        
        if (err)  res.send(err);  console.log('res', equipe);  res.send(equipe);
    
    });

};

exports.create = function(req, res) {const new_equipe = new Equipe(req.body);
    
    
    //handles null error                                                        q
    
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){  res.status(400).send({ error:true, message: 'Please provide all required field' });}else{Equipe.create(new_equipe, function(err, equipe) {  if (err)  res.send(err);  res.json({error:false,message:"Equipe added successfully!",data:equipe});});}};exports.findById = function(req, res) {Equipe.findById(req.params.id, function(err, equipe) {  if (err)  res.send(err);  res.json(equipe);});};exports.update = function(req, res) {  if(req.body.constructor === Object && Object.keys(req.body).length === 0){    res.status(400).send({ error:true, message: 'Please provide all required field' });  }else{    Equipe.update(req.params.id, new Employee(req.body), function(err, equipe) {   if (err)   res.send(err);   res.json({ error:false, message: 'Equipe successfully updated' });});}};exports.delete = function(req, res) {Equipe.delete( req.params.id, function(err, equipe) {  if (err)  res.send(err);  res.json({ error:false, message: 'Equipe successfully deleted' });});};
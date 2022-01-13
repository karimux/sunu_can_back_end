'use strict';

const Pronostic = require('../models/pronostic.model');
exports.findAll = function(req, res) {
    
    Pronostic.findAll(function(err, pronostic) { 
        
        console.log('controller')  
        
        
        if (err)  res.send(err);  console.log('res', pronostic);  res.send(pronostic);
    
    });

};

exports.create = function(req, res) {const new_pronostic = new Pronostic(req.body);
    
    
    //handles null error                                                        q
    
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){  res.status(400).send({ error:true, message: 'Please provide all required field' });}else{Pronostic.create(new_pronostic, function(err, pronostic) {  if (err)  res.send(err);  res.json({error:false,message:"Pronostic added successfully!",data:pronostic});});}};exports.findById = function(req, res) {Pronostic.findById(req.params.id, function(err, pronostic) {  if (err)  res.send(err);  res.json(pronostic);});};exports.update = function(req, res) {  if(req.body.constructor === Object && Object.keys(req.body).length === 0){    res.status(400).send({ error:true, message: 'Please provide all required field' });  }else{    Pronostic.update(req.params.id, new Pronostic(req.body), function(err, pronostic) {   if (err)   res.send(err);   res.json({ error:false, message: 'Pronostic successfully updated' });});}};exports.delete = function(req, res) {Pronostic.delete( req.params.id, function(err, pronostic) {  if (err)  res.send(err);  res.json({ error:false, message: 'Pronostic successfully deleted' });});};
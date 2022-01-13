'use strict';

const Team = require('../models/team.model');
exports.findAll = function(req, res) {
    
    Team.findAll(function(err, team) { 
        
        console.log('controller')  
        
        
        if (err)  res.send(err);  console.log('res', team);  res.send(team);
    
    });

};

exports.create = function(req, res) {const new_team = new Team(req.body);
    
    
    //handles null error                                                        q
    
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){  res.status(400).send({ error:true, message: 'Please provide all required field' });}else{Team.create(new_team, function(err, team) {  if (err)  res.send(err);  res.json({error:false,message:"Team added successfully!",data:team});});}};exports.findById = function(req, res) {Team.findById(req.params.id, function(err, team) {  if (err)  res.send(err);  res.json(team);});};exports.update = function(req, res) {  if(req.body.constructor === Object && Object.keys(req.body).length === 0){    res.status(400).send({ error:true, message: 'Please provide all required field' });  }else{Team.update(req.params.id, new Team(req.body), function(err, team) {   if (err)   res.send(err);   res.json({ error:false, message: 'Team successfully updated' });});}};exports.delete = function(req, res) {Team.delete(req.params.id, function(err, team) {  if (err)  res.send(err);  res.json({ error:false, message: 'Team successfully deleted' });});};
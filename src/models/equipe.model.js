'use strict';var dbConn = require('./../../config/db.config');

//Equipe object create

var Equipe = function(equipe){  
    
    this.nom          = equipe.nom;  
    this.victoire     = equipe.victoire;  
    this.null         = equipe.null;  
    this.defaite      = equipe.defaite;  
    this.logo         = equipe.logo; 
    this.poule         = equipe.poule;  
    this.point         = equipe.point;  
    this.diff         = equipe.diff;  
    this.but_encaisser   = equipe.but_encaisser;  
    this.but_marquer     = equipe.but_marquer;  

};
    
    
Equipe.create = function (newEqui, result) {dbConn.query("INSERT INTO equipes set ?", newEqui, function (err, res) {if(err) {  console.log("error: ", err);  result(err, null);}

else{  console.log(res.insertId);  result(null, res.insertId);}});

};


Equipe.findById = function (id, result) {dbConn.query("Select * from equipes where id = ? ", id, function (err, res) {
    
    if(err) {  console.log("error: ", err);  result(err, null);}else{  result(null, res);}});

};

Equipe.findAll = function (result) {
    dbConn.query("Select * from equipes", function (err, res) {if(err) { 
         console.log("error: ", err); 
          result(null, err);}else{
                console.log('equipes : ', res);  result(null, res);}});};Equipe.update = function(id, Equipe, result){dbConn.query("UPDATE equipes SET nom=?,victoire=?,null=?,defaite=?,logo=?,poule=?,point=?,diff=?,but_encaisser=?,but_marquer=? WHERE id = ?", [equipe.nome,equipe.victoire,equipe.null,equipe.defaite,equipe.logo,equipe.poule,equipe.point,equipe.diff,equipe.but_encaisser,equipe.but_marquer, id], function (err, res) {if(err) {  console.log("error: ", err);  result(null, err);}else{  result(null, res);}});};Equipe.delete = function(id, result){dbConn.query("DELETE FROM equipes WHERE id = ?", [id], function (err, res) {if(err) {  console.log("error: ", err);  result(null, err);}else{  result(null, res);}});};
                
module.exports= Equipe;
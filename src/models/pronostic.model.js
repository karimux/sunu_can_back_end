'use strict';var dbConn = require('./../../config/db.config');

//Eoueur object create

var Pronostic = function(pronostic){  
    
    this.nom_gamer          = pronostic.nom_gamer;  
    this.prenom_gamer       = pronostic.prenom_gamer;  
    this.adresse         = pronostic.adresse;  
    this.tel          = pronostic.tel;  
    this.score       = pronostic.score;
    this.type_pronostic       = pronostic.type_pronostic; 
    this.gardien       = pronostic.gardien;  
    this.defense       = pronostic.defense;  
    this.milieu       = pronostic.milieu;  
    this.attaquant       = pronostic.attaquant;  
    this.vainqueur       = pronostic.vainqueur;  
    this.match       = pronostic.match;  
    this.buteur       = pronostic.buteur;  
    this.score_match       = pronostic.score_match;  


};
    
    
Pronostic.create = function (newPros, result) {dbConn.query("INSERT INTO pronostics set ?", newPros, function (err, res) {if(err) {  console.log("error: ", err);  result(err, null);}

else{  console.log(res.insertId);  result(null, res.insertId);}});

};

Pronostic.findById = function (id, result) {dbConn.query("Select * from pronostics where id = ? ", id, function (err, res) {
    
    if(err) {  console.log("error: ", err);  result(err, null);}else{  result(null, res);}});

};

Pronostic.findAll = function (result) {
    dbConn.query("Select * from pronostics", function (err, res) {if(err) { 
         console.log("error: ", err); 
          result(null, err);}else{
                console.log('pronostics : ', res);  result(null, res);}});};
                
Pronostic.update = function(id, pronostic, result){dbConn.query("UPDATE pronostics SET nom=_gamer?,prenom_gamer=?,adresse=?,tel=?,score=?,type_pronostic=?,gardien=?,defense=?,milieu=?,attaquant=?,vainqueur=?,match=?,buteur=?,score_match=? WHERE id = ?", [pronostic.nom_gamer,pronostic.prenom_gamer,pronostic.adresse,pronostic.tel,pronostic.score,pronostic.type_pronostic,pronostic.gardien,pronostic.defense,pronostic.milieu,pronostic.attaquant,pronostic.vainqueur,pronostic.match,pronostic.buteur,pronostic.score_match, id], function (err, res) {if(err) {  console.log("error: ", err);  result(null, err);}else{  result(null, res);}});};Pronostic.delete = function(id, result){dbConn.query("DELETE FROM pronostics WHERE id = ?", [id], function (err, res) {if(err) {  console.log("error: ", err);  result(null, err);}else{  result(null, res);}});};
                
module.exports= Pronostic;
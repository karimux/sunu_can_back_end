'use strict';var dbConn = require('./../../config/db.config');

//Eoueur object create

var Team = function(team){  
    
    this.nom          = team.nom;  
    this.prenom       = team.prenom;  
    this.club         = team.club;  
    this.age          = team.age;  
    this.numero       = team.numero; 
    this.poste       = team.poste;  
    this.photo       = team.photo;  

};
    
    
Team.create = function (newTeam, result) {dbConn.query("INSERT INTO team_senegal set ?", newTeam, function (err, res) {if(err) {  console.log("error: ", err);  result(err, null);}

else{  console.log(res.insertId);  result(null, res.insertId);}});

};

Team.findById = function (id, result) {dbConn.query("Select * from team_senegal where id = ? ", id, function (err, res) {
    
    if(err) {  console.log("error: ", err);  result(err, null);}else{  result(null, res);}});

};

Team.findAll = function (result) {
    dbConn.query("Select * from team_senegal", function (err, res) {if(err) { 
         console.log("error: ", err); 
          result(null, err);}else{
                console.log('team_senegal : ', res);  result(null, res);}});};Team.update = function(id, Team, result){dbConn.query("UPDATE team_senegal SET nom=?,prenom=?,club=?,age=?,numero=?,poste=?,photo=? WHERE id = ?", [team.nom,team.prenom,team.club,team.age,team.numero,team.poste,team.photo, id], function (err, res) {if(err) {  console.log("error: ", err);  result(null, err);}else{  result(null, res);}});};Team.delete = function(id, result){dbConn.query("DELETE FROM team_senegal WHERE id = ?", [id], function (err, res) {if(err) {  console.log("error: ", err);  result(null, err);}else{  result(null, res);}});};
                
module.exports= Team;
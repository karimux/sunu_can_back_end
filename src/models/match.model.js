'use strict';var dbConn = require('./../../config/db.config');

//match object create

var Match = function(match){  
    
    this.date               = match.date;  
    this.stade              = match.stade;  
    this.team_home          = match.team_home;  
    this.team_away          = match.team_away;  
    this.score_home         = match.score_home;  
    this.score_away         = match.score_away;  
    this.scored_home        = match.scored_home;
    this.scored_away        = match.scored_away;  


};
    
    
Match.create = function (newMatc, result) {dbConn.query("INSERT INTO matchs set ?", newMatc, function (err, res) {if(err) {  console.log("error: ", err);  result(err, null);}

else{  console.log(res.insertId);  result(null, res.insertId);}});

};


Match.findById = function (id, result) {dbConn.query("Select * from matchs where id = ? ", id, function (err, res) {
    
    if(err) {  console.log("error: ", err);  result(err, null);}else{  result(null, res);}});

};

Match.findAll = function (result) {
    dbConn.query("Select * from matchs", function (err, res) {if(err) { 
         console.log("error: ", err); 
          result(null, err);}else{
                console.log('matchs : ', res);  result(null, res);}});};Match.update = function(id, match, result){dbConn.query("UPDATE matchs SET date=?,stade=?,team_home=?,team_away=?,score_home=?,score_away=?,scored_home=?,scored_away=? WHERE id = ?", [match.date,match.stade,match.team_home,match.team_away,match.score_home,match.score_away,match.scored_home,match.scored_away, id], function (err, res) {if(err) {  console.log("error: ", err);  result(null, err);}else{  result(null, res);}});};Match.delete = function(id, result){dbConn.query("DELETE FROM matchs WHERE id = ?", [id], function (err, res) {if(err) {  console.log("error: ", err);  result(null, err);}else{  result(null, res);}});}
module.exports= Match;
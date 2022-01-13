const express = require('express');

const bodyParser = require('body-parser');

// create express app

const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
// Setup server port

const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json

app.use(bodyParser.json())

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./endpoints')(app)
// define a root route

app.get('/', (req, res) => {  res.send("Hello World");});


// Require employee routes

const matchRoutes = require('./src/routes/match.route')
const equipeRoutes = require('./src/routes/equipe.route')
const pronosticRoutes = require('./src/routes/pronostic.route')
const teamRoutes = require('./src/routes/team.route')



// using as middleware

app.use('/api/v1/matchs', matchRoutes)
app.use('/api/v1/equipes', equipeRoutes)
app.use('/api/v1/pronostics', pronosticRoutes)
app.use('/api/v1/teams', teamRoutes)






// listen for requests

app.listen(port, () => {  
    
    console.log(`Server is listening on port ${port}`);

});
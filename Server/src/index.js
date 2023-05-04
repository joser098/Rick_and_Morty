const express = require("express");
const server = express();
const routes = require('./routes/index');
const { conn } = require('./DB_connection');
const morgan = require('morgan');


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
    res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, DELETE'
            );
    next();
 });
    
 server.use(morgan('dev'))
 server.use(express.json());
 server.use("/rickandmorty", routes)
        
 const PORT = 3001;
 
conn.sync({alter: true}).then(() => {
    server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})
.catch((error) => {console.log(error)});  

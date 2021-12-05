import express from 'express';
import bodyParser from 'body-parser';
//import mssql from 'mssql';
import cors from "cors";
import usersRoutes from './routes/customers.js'
//import morgan from 'morgan';
//import { Prohairesis } from 'prohairesis';



const app = express();
const PORT = process.env.Port || 8080;
//const mySQLString = 'mysql://b444923eb607b8:a1e609b9@us-cdbr-east-04.cleardb.com/heroku_17ce435066c6b8e?reconnect=true';
//const database = new Prohairesis(mySQLString);
//const mssql = require('mssql');

/*mssqlConnectiom = mssql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database: 'EmployeeDB'
    
})*/

/*mssqlConnection.connect((err)=>{
    if(!err)
    console.log('DB conection succeded.');
    else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});*/

app.use(cors());
app.options('*', cors());

/*app
.use(express.static('public'))//cdl
.use(morgan('dev'))
.use(bodyParser.urlencoded({ extended: false}))*/
app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(bodyParser.json());
//app.use(express.json());

app.use('/users', usersRoutes);

/*app.post('/api/user',(req, res) => {//cdl
  const body = req.body;
 
    database.execute(`
    INSERT INTO User (
        first_name,
        last_name,
        age
        )VALUES(
            @firstName,
            @lastName,
            @age
        )
    `,{
        firstName: body.first,
        lastName: body.last,
        age: body.age,
    });
    res.end(`Added user`);
});*/

//request and response call back function...//jot
app.get('/',(req, res) => {
    console.log('[TEST]!');

    res.send('Hello from Homepage.');
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
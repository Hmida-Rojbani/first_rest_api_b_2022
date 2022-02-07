const express = require("express");
const log = require('./logging');
const morgan = require('morgan');
const config = require('config');
const appDebug = require('Debug')('app:debug');
const dbDebug = require('Debug')('app:db');
const students_router= require('./routers/students');

const port = process.env.PORT || 3000;
const app = express();

//console.log(process.env.NODE_ENV);
appDebug(app.get('env'));
appDebug('App name : ',config.get('app-name'));
//console.log('connect Db host : ', 'ip localhost');
dbDebug('connect Db host : ', config.get('DB.host'));
dbDebug('connect Db pass : ', config.get('DB.password'));
if(app.get('env') === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/students',students_router);


app.listen(port, () => appDebug(`Running on ${port}`));

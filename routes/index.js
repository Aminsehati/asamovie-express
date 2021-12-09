const registerRouter = require('./auth/register');
module.exports = (app)=>{
    app.use('/api/v1/register',registerRouter);
}
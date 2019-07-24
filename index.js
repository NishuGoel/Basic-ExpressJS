const express = require('express'), about=require('./about.js')
const info = require('./info.js'), cors=require('cors')

const app = express()

const port = 3000

//Multiple Routes example
app.get('/', about.index)
app.get('/customers', about.customers)

//Route parameters
app.get('/customers/:id', function(req, res){
    res.send("Customer selected is " + req.params['id'])
})

//Query parameters
app.get('/users', function(req, res){
    res.send("User selected is " + req.query.id)
})

//Using cors() for all requests
app.use(cors())


//Custom Middleware
var myCustomMiddleware= function(req, res, next){
    console.log("Custom Middleware running");
    next();
}
app.get('/new', myCustomMiddleware, about.new);
app.get('/customers/contacted',myCustomMiddleware ,info.contacted);

//Using cors() for a single route
app.get('/new/contacted', cors(), info.contacted)

app.listen(port, ()=> {
    console.log("CORS-enabled server Listening on port 3000")
});

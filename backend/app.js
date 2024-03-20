const express = require("express");
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');
const csurf = require('csurf');
const { isProduction } = require('./config/keys');

const debug = require('debug');

require('./models/User');
require('./models/Part');
require('./models/Customer');
require('./models/CustomerContact');
require('./models/CustomerRFQ');
require('./models/ProsecRfQ');
require('./models/Vendor');
require('./models/VendorContact');
require('./models/VendorQuote');
require('./models/ProsecQuote');
require('./config/passport'); 
const passport = require('passport');

const usersRouter = require('./routes/api/users'); // update the import file path
const csrfRouter = require('./routes/api/csrf');
const partsRouter = require('./routes/api/parts');
const customerRouter = require('./routes/api/customers');
const customerContactRouter = require('./routes/api/customercontacts');
const customerRFQRouter = require('./routes/api/customerrfqs');
const prosecRFQRouter = require('./routes/api/prosecrfqs');
const vendorRouter = require('./routes/api/vendors');
const vendorContactRouter = require('./routes/api/vendorcontacts');
const vendorQuoteRouter = require('./routes/api/vendorquotes');
const prosecQuoteRouter = require('./routes/api/prosecquotes');


const app = express();

app.use(logger('dev')); // log request components (URL/method) to terminal
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: false })); // parse urlencoded request body
app.use(cookieParser()); // parse cookies as an object on req.cookies

app.use(passport.initialize());

// Security Middleware
if (!isProduction) {
    // Enable CORS only in development because React will be on the React
    // development server (http://localhost:3000). (In production, the Express 
    // server will serve the React files statically.)
    app.use(cors());
}

// Set the _csrf token and create req.csrfToken method to generate a hashed
// CSRF token
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);

// Attach Express routers
app.use('/api/users', usersRouter); // update the path
app.use('/api/csrf', csrfRouter);
app.use('/api/parts', partsRouter);
app.use('/api/customers', customerRouter);
app.use('/api/customercontacts', customerContactRouter);
app.use('/api/customerrfqs', customerRFQRouter);
app.use('/api/prosecrfqs', prosecRFQRouter);
app.use('/api/vendors', vendorRouter);
app.use('/api/vendorcontacts', vendorContactRouter);
app.use('/api/vendorquotes', vendorQuoteRouter);
app.use('/api/prosecquotes', prosecQuoteRouter);

// Express custom middleware for catching all unmatched requests and formatting
// a 404 error to be sent as the response.
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
});

const serverErrorLogger = debug('backend:error');

// Express custom error handler that will be called whenever a route handler or
// middleware throws an error or invokes the `next` function with a truthy value
app.use((err, req, res, next) => {
    serverErrorLogger(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        statusCode,
        errors: err.errors
    })
});

module.exports = app;

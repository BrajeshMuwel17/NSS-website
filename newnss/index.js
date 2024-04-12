require("dotenv").config();
const msal = require("@azure/msal-node");
var express = require("express");
const { connect } = require("mongoose");
var app = express();

connect("mongodb+srv://katariyadishant418:pBmSd3Z9BT2OI0VF@nss.kyieogt.mongodb.net/")

const authRouter = require("./auth.js");

const msalConfig = {
    auth: {
      clientId: process.env.OAUTH_CLIENT_ID,
      authority: process.env.OAUTH_AUTHORITY,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    },
    system: {
      loggerOptions: {
        loggerCallback(loglevel, message, containsPii) {
          console.log(message);
        },
        piiLoggingEnabled: false,
        logLevel: msal.LogLevel.Verbose,
      },
    },
  };
  
  // Create msal application object
  app.locals.msalClient = new msal.ConfidentialClientApplication(msalConfig);

  const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT || 8080}`);
  });


  app.use("/auth", authRouter);
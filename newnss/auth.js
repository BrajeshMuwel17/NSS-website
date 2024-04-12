const { json } = require("express");
const graph = require("./graph");
const router = require("express-promise-router")();
const jwt = require("jsonwebtoken");
const User = require("./User");
const { default: mongoose } = require("mongoose");
const FRONTEND_URL = process.env.FRONTEND_URL;

/* GET auth callback. */
router.get("/signin", async function (req, res) {
  const urlParameters = {
    scopes: process.env.OAUTH_SCOPES.split(","),
    redirectUri: process.env.OAUTH_REDIRECT_URI,
  };
  try {
    const authUrl = await req.app.locals.msalClient.getAuthCodeUrl(
      urlParameters
    );
    res.redirect(authUrl);
  } catch (error) {
    console.log(`Error: ${error}`);
    req.flash("error_msg", {
      message: "Error getting auth URL",
      debug: JSON.stringify(error, Object.getOwnPropertyNames(error)),
    });
    res.redirect("/");
  }
});

router.get("/callback", async function (req, res) {
  const tokenRequest = {
    code: req.query.code,
    scopes: process.env.OAUTH_SCOPES.split(","),
    redirectUri: process.env.OAUTH_REDIRECT_URI,
  };

  try {
    // console.log(tokenRequest.code);
    const response = await req.app.locals.msalClient.acquireTokenByCode(
      tokenRequest
    );
    // console.log("The access token: ", response);
    const idtoken = response.idToken;
    // console.log("The id token: ", idtoken);
    // Save the user's homeAccountId in their session

    console.log("The account: ", response.account);

    const user = await graph.getUserDetails(
      req.app.locals.msalClient,
      response.account.homeAccountId
    );

    console.log("The user: ", user);

    // Create user if not exists
    // console.log(user);
    const userExists = await User.findOne({
      email: user.mail || user.userPrincipalName,
    });
    
    if (!userExists) {
      console.log("User does not exist");
      const newUser = new User({
        name: user.displayName,
        email: user.mail || user.userPrincipalName,
      });
      try {
        console.log("Saving user");
        await newUser.save();
        console.log("User saved");
        jwt.sign(
          { isowner: true, id: user.mail || user.userPrincipalName },
          process.env.JWT_SEC,
          (err, token) => {
            console.log("The token: ", token);
            user.token = token;
            console.log(user);

            // Assuming you have the token in a variable named 'token'
            res.cookie("token", token, { httpOnly: true, sameSite: "strict" });

            res.redirect("http://localhost:3002");
            res.send(JSON.stringify(user));
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("User already exists");
      jwt.sign(
        { isowner: true, id: user.mail || user.userPrincipalName },
        process.env.JWT_SEC,
        (err, token) => {
          user.token = token;

          // Assuming you have the token in a variable named 'token'
          res.cookie("token", token, { httpOnly: true});
          res.redirect("http://localhost:3002");
          res.send(JSON.stringify(user));
        }
      );
    }
  } catch (error) {
    console.log(`Error completing authentication: ${error}`);
    console.log(JSON.stringify(error, Object.getOwnPropertyNames(error)));
    res.redirect("/");
  }

  // res.redirect("http://localhost:3000");
});

router.get("/signout", async function (req, res) {
  // Sign out
  console.log("Signing out user: ", req.session);
  if (req.session.userId) {
    // Look up the user's account in the cache
    req.session.destroy();
    // const accounts = await req.app.locals.msalClient
    //   .getTokenCache()
    //   .getAllAccounts();

    // const userAccount = accounts.find(
    //   (a) => a.homeAccountId === req.session.userId
    // );

    // // Remove the account
    // if (userAccount) {
    //   req.app.locals.msalClient.getTokenCache().removeAccount(userAccount);
    // }
  }

  // Destroy the user's session
  try{
    res.clearCookie("token");
    res.clearCookie("connect.sid");
    res.send("done");
  }
  catch(err){
    console.log(err);
  }
});

module.exports = router;

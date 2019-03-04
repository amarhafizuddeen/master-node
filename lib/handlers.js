/*
 * Request handlers
 *
 */

//  Dependencies
const _data = require("./data");
const helpers = require("./helpers");
const config = require("./config");

// Define the handlers
let handlers = {};

/*
 * HTML Handlers
 *
 */

// Index handler
handlers.index = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Uptime Monitoring - Made Simple",
      "head.description":
        "We offer free, simple uptime monitoring for HTTP/HTTPS sites of all kinds. When your site goes down, we'll send you a text to let you know.",
      "body.class": "index"
    };

    // Read in a template as a string
    helpers.getTemplate("index", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create Account
handlers.accountCreate = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Create an Account",
      "head.description": "Signup is easy and only takes a few seconds.",
      "body.class": "accountCreate"
    };

    // Read in a template as a string
    helpers.getTemplate("accountCreate", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create New Session
handlers.sessionCreate = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Login to Your Account",
      "head.description":
        "Please enter your phone number and password to access your account.",
      "body.class": "sessionCreate"
    };

    // Read in a template as a string
    helpers.getTemplate("sessionCreate", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Session has been deleted
handlers.sessionDeleted = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Logged Out",
      "head.description": "You have been logged out of your account.",
      "body.class": "sessionDeleted"
    };

    // Read in a template as a string
    helpers.getTemplate("sessionDeleted", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Edit your account
handlers.accountEdit = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Account Settings",
      "body.class": "accountEdit"
    };

    // Read in a template as a string
    helpers.getTemplate("accountEdit", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Account has been deleted
handlers.accountDeleted = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Account Settings",
      "head.description": "Your account has been deleted.",
      "body.class": "accountDeleted"
    };

    // Read in a template as a string
    helpers.getTemplate("accountDeleted", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Create a new check
handlers.checksCreate = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Create a New Check",
      "body.class": "checksCreate"
    };

    // Read in a template as a string
    helpers.getTemplate("checksCreate", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Dashboard (view all checks)
handlers.checksList = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Dashboard",
      "body.class": "checksList"
    };

    // Read in a template as a string
    helpers.getTemplate("checksList", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Edit a check
handlers.checksEdit = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Prepare data for interpolation
    const templateData = {
      "head.title": "Check Details",
      "body.class": "checksEdit"
    };

    // Read in a template as a string
    helpers.getTemplate("checksEdit", templateData, (err, str) => {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, (err, str) => {
          if (!err && str) {
            // Return that page as html
            callback(200, str, "html");
          } else {
            callback(500, undefined, "html");
          }
        });
      } else {
        callback(500, undefined, "html");
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Favicon
handlers.favicon = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Read in the favicon's data
    helpers.getStaticAsset("favicon.ico", (err, data) => {
      if (!err && data) {
        // Callback the data
        callback(200, data, "favicon");
      } else {
        callback(500);
      }
    });
  } else {
    callback(405, undefined, "html");
  }
};

// Public assets
handlers.public = (data, callback) => {
  // Reject any request that isn't a GET
  if (data.method == "get") {
    // Get the filename being requested
    const trimmedAssetName = data.trimmedPath.replace("public/", "");
    if (trimmedAssetName.length > 0) {
      // Read in the asset's data
      helpers.getStaticAsset(trimmedAssetName, (err, data) => {
        if (!err && data) {
          // Determine the content type (default to plain text)
          let contentType = "plain";

          if (trimmedAssetName.indexOf(".css") > -1) {
            contentType = "css";
          }
          if (trimmedAssetName.indexOf(".png") > -1) {
            contentType = "png";
          }
          if (trimmedAssetName.indexOf(".jpeg") > -1) {
            contentType = "jpeg";
          }
          if (trimmedAssetName.indexOf(".ico") > -1) {
            contentType = "ico";
          }

          // Callback the data
          callback(200, data, contentType);
        } else {
          callback(404, { Error: err });
        }
      });
    } else {
      callback(404);
    }
  } else {
    callback(405);
  }
};

/*
 * JSON API Handlers
 *
 */

// Example error
handlers.exampleError = (data, callback) => {
  var err = new Error("This is an example error");
  throw err;
};

// Users
handlers.users = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback);
  } else {
    callback(405, { Error: "Method not allowed" });
  }
};

// Container for the users submethods
handlers._users = {};

// Users - post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: none
handlers._users.post = (data, callback) => {
  // Destructure the objects
  let { firstName, lastName, phone, password, tosAgreement } = data.payload;

  // Check that all required fields are filled out
  firstName =
    typeof firstName == "string" && firstName.trim().length > 0
      ? firstName.trim()
      : false;
  lastName =
    typeof lastName == "string" && lastName.trim().length > 0
      ? lastName.trim()
      : false;
  phone =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim().replace("-", "")
      : false;
  password =
    typeof password == "string" && password.trim().length > 0
      ? password.trim()
      : false;
  tosAgreement =
    typeof tosAgreement == "boolean" && tosAgreement == true ? true : false;

  if (firstName && lastName && phone && password && tosAgreement) {
    // Make sure that the user doesn't already exist
    _data.read("users", phone, (err, data) => {
      if (err) {
        // Hash the password
        const hashPassword = helpers.hash(password);

        // Create the user object
        if (hashPassword) {
          let userObject = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            hashPassword: hashPassword,
            tosAgreement: true
          };

          // Store the user
          _data.create("users", phone, userObject, err => {
            if (!err) {
              callback(200);
            } else {
              console.log(err);
              callback(500, { Error: "Could not create the new user" });
            }
          });
        } else {
          callback(500, { Error: "Could not hash the user's password" });
        }
      } else {
        // User already exists
        callback(400, {
          Error: "A user with that phone number already exists"
        });
      }
    });
  } else {
    callback(400, { Error: "Missing required fields" });
  }
};

// Users - get
// Required data: phone
// Optional data: none
handlers._users.get = (data, callback) => {
  // Destructure the object
  let { phone } = data.queryStringObject;
  let { token } = data.headers;

  // Check that the phone number provided is valid
  phone =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim().replace("-", "")
      : false;

  if (phone) {
    // Get the token from the headers
    token = typeof token == "string" ? token : false;

    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token, phone, tokenIsValid => {
      if (tokenIsValid) {
        // Look up the user
        _data.read("users", phone, (err, data) => {
          if (!err && data) {
            // Remove the hashed password from the user object before returning to the requester
            delete data.hashPassword;
            callback(200, data);
          } else {
            callback(404);
          }
        });
      } else {
        callback(403);
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Users - put
// Required data: phone
// Optional data: firstName, lastName, password (at least one must be specified)
handlers._users.put = (data, callback) => {
  // Destructure the objects
  let { firstName, lastName, phone, password } = data.payload;
  let { token } = data.headers;

  // Check for the required field
  phone =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim().replace("-", "")
      : false;

  // Check for the optional fields
  firstName =
    typeof firstName == "string" && firstName.trim().length > 0
      ? firstName.trim()
      : false;
  lastName =
    typeof lastName == "string" && lastName.trim().length > 0
      ? lastName.trim()
      : false;
  password =
    typeof password == "string" && password.trim().length > 0
      ? password.trim()
      : false;

  // Error if phone is invalid
  if (phone) {
    // Error if nothing is sent to update
    if (firstName || lastName || password) {
      // Get the token from the headers
      token = typeof token == "string" ? token : false;

      // Verify that the given token is valid for the phone number
      handlers._tokens.verifyToken(token, phone, tokenIsValid => {
        if (tokenIsValid) {
          // Lookup the user
          _data.read("users", phone, (err, userData) => {
            if (!err && userData) {
              // Update the field necessary
              if (firstName) {
                userData.firstName = firstName;
              }
              if (lastName) {
                userData.lastName = lastName;
              }
              if (password) {
                userData.hashPassword = helpers.hash(password);
              }
              // Store the new updates
              _data.update("users", phone, userData, err => {
                if (!err) {
                  callback(200);
                } else {
                  console.log(err);
                  callback(500, { Error: "Could not update the user" });
                }
              });
            } else {
              callback(400, { Error: "The specified user does not exist" });
            }
          });
        } else {
          callback(403);
        }
      });
    } else {
      callback(404, { Error: "Missing fields to update" });
    }
  } else {
    callback(404, { Error: "Missing required field" });
  }
};

// Users - delete
// Required fields: phone
handlers._users.delete = (data, callback) => {
  // Destructure the object
  let { phone } = data.queryStringObject;
  let { token } = data.headers;

  // Check that the phone number provided is valid
  phone =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim().replace("-", "")
      : false;

  if (phone) {
    // Get the token from the headers
    token = typeof token == "string" ? token : false;

    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(token, phone, tokenIsValid => {
      if (tokenIsValid) {
        // Look up the user
        _data.read("users", phone, (err, userData) => {
          if (!err && data) {
            _data.delete("users", phone, err => {
              if (!err) {
                // Delete each of the checks associated with the user
                let { checks } = userData;
                let userChecks =
                  typeof checks == "object" && checks instanceof Array
                    ? checks
                    : [];
                const checksToDelete = userChecks.length;
                if (checksToDelete > 0) {
                  let checksDeleted = 0;
                  let deletionErrors = false;

                  // Loop through the check
                  userChecks.forEach(checkId => {
                    // Delete the check
                    _data.delete("checks", checkId, err => {
                      if (err) {
                        deletionErrors = true;
                      }
                      checksDeleted++;
                      if (checksDeleted == checksToDelete) {
                        if (!deletionErrors) {
                          callback(200);
                        } else {
                          callback(500, {
                            Error:
                              "Errors encountered while attempting to delete all of the user's checks. All checks may not have been deleted from the system successfully"
                          });
                        }
                      }
                    });
                  });
                } else {
                  callback(200);
                }
              } else {
                callback(500, { Error: "Could not delete the specified user" });
              }
            });
          } else {
            callback(400, { Error: "Could not find the specified user" });
          }
        });
      } else {
        callback(403);
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Tokens
handlers.tokens = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._tokens[data.method](data, callback);
  } else {
    callback(405, { Error: "Method not allowed" });
  }
};

// Container for all the tokens method
handlers._tokens = {};

// Tokens - post
// Required data: phone, password
// Optional data: none
handlers._tokens.post = (data, callback) => {
  // Destructure the objects
  let { phone, password } = data.payload;

  // Check that all required fields are filled out
  phone =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim().replace("-", "")
      : false;
  password =
    typeof password == "string" && password.trim().length > 0
      ? password.trim()
      : false;

  if (phone && password) {
    // Lookup the user who matches that phone number
    _data.read("users", phone, (err, userData) => {
      if (!err && userData) {
        // Hash the sent password, and compare it to the password stored in the user object
        const hashPassword = helpers.hash(password);
        if (hashPassword == userData.hashPassword) {
          // If valid, create a new token with a random token. Set expiration date 1 hour in the future
          const tokenId = helpers.createRandomString(20);
          const expires = Date.now() + 1000 * 60 * 60;
          const tokenObject = {
            phone: phone,
            id: tokenId,
            expires: expires
          };

          // Store the token
          _data.create("tokens", tokenId, tokenObject, err => {
            if (!err) {
              callback(200, tokenObject);
            } else {
              callback(500, { Error: "Could not create the new token" });
            }
          });
        } else {
          callback(400, {
            Error: "Password did not match the specified user's stored password"
          });
        }
      } else {
        callback(400, { Error: "Could not find the specified user" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field(s)" });
  }
};

// Tokens - get
// Required data: id
// Optional data: none
handlers._tokens.get = (data, callback) => {
  // Check that the id is valid
  let { id } = data.queryStringObject;
  id = typeof id == "string" && id.trim().length == 20 ? id.trim() : false;

  if (id) {
    // Look up the user
    _data.read("tokens", id, (err, tokenData) => {
      if (!err && tokenData) {
        callback(200, tokenData);
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Tokens - put
// Required data: id, extend
// Optional data: none
handlers._tokens.put = (data, callback) => {
  // Destructure the objects
  let { id, extend } = data.payload;

  // Check that all required fields are filled out
  id = typeof id == "string" && id.trim().length == 20 ? id.trim() : false;
  extend = typeof extend == "boolean" && extend == true ? true : false;

  if (id && extend) {
    // Lookup the token
    _data.read("tokens", id, (err, tokenData) => {
      if (!err && tokenData) {
        // Check to make sure the token has not already expired
        if (tokenData.expires > Date.now()) {
          // Set the expiration an hour from now
          tokenData.expires = Date.now() + 1000 * 60 * 60;

          // Store the new updates
          _data.update("tokens", id, tokenData, err => {
            if (!err) {
              callback(200);
            } else {
              callback(500, {
                Error: "Could not update the token's expiration"
              });
            }
          });
        } else {
          callback(400, {
            Error: "The token has already expired and can not be extended"
          });
        }
      } else {
        callback(400, { Error: "Specified token does not exist" });
      }
    });
  } else {
    callback(400, {
      Error: "Missing required field(s) or field(s) are invalid"
    });
  }
};

// Tokens - delete
// Required data: id
// Optional data: none
handlers._tokens.delete = (data, callback) => {
  // Check that the id is valid
  let { id } = data.queryStringObject;
  id = typeof id == "string" && id.trim().length == 20 ? id.trim() : false;

  if (id) {
    // Look up the token
    _data.read("tokens", id, (err, data) => {
      if (!err && data) {
        _data.delete("tokens", id, err => {
          if (!err) {
            callback(200);
          } else {
            callback(500, { Error: "Could not delete the specified token" });
          }
        });
      } else {
        callback(400, { Error: "Could not find the specified token" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Verify if a given token id is currently valid for a given user
handlers._tokens.verifyToken = (id, phone, callback) => {
  // Lookup the token
  _data.read("tokens", id, (err, tokenData) => {
    if (!err && tokenData) {
      // Check that the token is for the given user and has not expired
      if (tokenData.phone == phone && tokenData.expires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// Checks
handlers.checks = (data, callback) => {
  const acceptableMethods = ["post", "get", "put", "delete"];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._checks[data.method](data, callback);
  } else {
    callback(405, { Error: "Method not allowed" });
  }
};

// Container for all the checks method
handlers._checks = {};

// Check - post
// Required data: protocol, url, method, successCodes, timeoutSeconds
// Optional data: none
handlers._checks.post = (data, callback) => {
  // Destructure the objects
  let { protocol, url, method, successCodes, timeoutSeconds } = data.payload;
  let { token } = data.headers;

  // Validate input
  protocol =
    typeof protocol == "string" && ["http", "https"].indexOf(protocol) > -1
      ? protocol
      : false;
  url = typeof url == "string" && url.trim().length > 0 ? url.trim() : false;
  method =
    typeof method == "string" &&
    ["post", "get", "put", "delete"].indexOf(method) > -1
      ? method
      : false;
  successCodes =
    typeof successCodes == "object" &&
    successCodes instanceof Array &&
    successCodes.length > 0
      ? successCodes
      : false;
  timeoutSeconds =
    typeof timeoutSeconds == "number" &&
    timeoutSeconds % 1 === 0 &&
    timeoutSeconds >= 1 &&
    timeoutSeconds <= 5
      ? timeoutSeconds
      : false;

  if (protocol && url && method && successCodes && timeoutSeconds) {
    // Get the token from the headers
    token = typeof token == "string" ? token : false;

    // Lookup the user by reading the token
    _data.read("tokens", token, (err, tokenData) => {
      if (!err && tokenData) {
        const userPhone = tokenData.phone;

        // Lookup the user data
        _data.read("users", userPhone, (err, userData) => {
          if (!err && userData) {
            let { checks } = userData;
            const userChecks =
              typeof checks == "object" && checks instanceof Array
                ? checks
                : [];

            // Verify that the user has less than the number of max-checks-per-user
            if (userChecks.length < config.maxChecks) {
              // Create a random id for the check
              const checkId = helpers.createRandomString(20);

              // Create the check object, and include the user's phone
              const checkObject = {
                id: checkId,
                userPhone: userPhone,
                protocol: protocol,
                url: url,
                method: method,
                successCodes: successCodes,
                timeoutSeconds: timeoutSeconds
              };

              // Save the object
              _data.create("checks", checkId, checkObject, err => {
                if (!err) {
                  // Add the check id to the user's object
                  userData.checks = userChecks;
                  userData.checks.push(checkId);

                  // Save the new user data
                  _data.update("users", userPhone, userData, err => {
                    if (!err) {
                      // Return the data about the new check
                      callback(200, checkObject);
                    } else {
                      callback(500, {
                        Error: "Could not update the user with the new check"
                      });
                    }
                  });
                } else {
                  callback(500, { Error: "Could not create the new check" });
                }
              });
            } else {
              callback(400, {
                Error:
                  "The user already has the maximum number of checks (" +
                  config.maxChecks +
                  ")"
              });
            }
          } else {
            callback(403);
          }
        });
      } else {
        callback(403);
      }
    });
  } else {
    callback(400, { Error: "Missing required inputs, or inputs are invalid" });
  }
};

// Checks - get
// Required data: id
// Optional data: none
handlers._checks.get = (data, callback) => {
  // Destructure the object
  let { id } = data.queryStringObject;
  let { token } = data.headers;

  // Check that the id provided is valid
  id = typeof id == "string" && id.trim().length == 20 ? id.trim() : false;

  if (id) {
    // Lookup the check
    _data.read("checks", id, (err, checkData) => {
      if (!err && checkData) {
        // Get the token from the headers
        token = typeof token == "string" ? token : false;

        // Verify that the given token is valid and belongs to the user who created the check
        handlers._tokens.verifyToken(
          token,
          checkData.userPhone,
          tokenIsValid => {
            if (tokenIsValid) {
              // Return the check data
              callback(200, checkData);
            } else {
              callback(403);
            }
          }
        );
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Checks - put
// Required data: id
// Optional data: protocol, url, method, successCodes, timeoutSeconds (one must be sent)
handlers._checks.put = (data, callback) => {
  // Destructure the objects
  let {
    id,
    protocol,
    url,
    method,
    successCodes,
    timeoutSeconds
  } = data.payload;
  let { token } = data.headers;

  // Check for the required field
  id = typeof id == "string" && id.trim().length == 20 ? id.trim() : false;

  // Check for the optional fields
  protocol =
    typeof protocol == "string" && ["http", "https"].indexOf(protocol) > -1
      ? protocol
      : false;
  url = typeof url == "string" && url.trim().length > 0 ? url.trim() : false;
  method =
    typeof method == "string" &&
    ["post", "get", "put", "delete"].indexOf(method) > -1
      ? method
      : false;
  successCodes =
    typeof successCodes == "object" &&
    successCodes instanceof Array &&
    successCodes.length > 0
      ? successCodes
      : false;
  timeoutSeconds =
    typeof timeoutSeconds == "number" &&
    timeoutSeconds % 1 === 0 &&
    timeoutSeconds >= 1 &&
    timeoutSeconds <= 5
      ? timeoutSeconds
      : false;

  // Check to make sure id is valid
  if (id) {
    // Check to make sure one or more optional fields has been sent
    if (protocol || url || method || successCodes || timeoutSeconds) {
      // Lookup the check
      _data.read("checks", id, (err, checkData) => {
        if (!err && checkData) {
          // Get the token from the headers
          token = typeof token == "string" ? token : false;

          // Verify that the given token is valid and belongs to the user who created the check
          handlers._tokens.verifyToken(
            token,
            checkData.userPhone,
            tokenIsValid => {
              if (tokenIsValid) {
                // Update the check where necessary
                if (protocol) {
                  checkData.protocol = protocol;
                }
                if (url) {
                  checkData.url = url;
                }
                if (method) {
                  checkData.method = method;
                }
                if (successCodes) {
                  checkData.successCodes = successCodes;
                }
                if (timeoutSeconds) {
                  checkData.timeoutSeconds = timeoutSeconds;
                }

                // Save the updates
                _data.update("checks", id, checkData, err => {
                  if (!err) {
                    callback(200);
                  } else {
                    callback(500, { Error: "Could not update the check" });
                  }
                });
              } else {
                callback(403);
              }
            }
          );
        } else {
          callback(400, { Error: "Check id does not exist" });
        }
      });
    } else {
      callback(400, { Error: "Missing fields to update" });
    }
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Checks - delete
// Required data: id
// Optional data: none
handlers._checks.delete = (data, callback) => {
  // Destructure the object
  let { id } = data.queryStringObject;
  let { token } = data.headers;

  // Check that the phone number provided is valid
  id = typeof id == "string" && id.trim().length == 20 ? id.trim() : false;

  if (id) {
    // Lookup the check
    _data.read("checks", id, (err, checkData) => {
      if (!err && checkData) {
        // Get the token from the headers
        token = typeof token == "string" ? token : false;

        // Verify that the given token is valid for the phone number
        handlers._tokens.verifyToken(
          token,
          checkData.userPhone,
          tokenIsValid => {
            if (tokenIsValid) {
              // Delete the check data
              _data.delete("checks", id, err => {
                if (!err) {
                  // Look up the user
                  _data.read("users", checkData.userPhone, (err, userData) => {
                    if (!err && data) {
                      let { checks } = userData;
                      let userChecks =
                        typeof checks == "object" && checks instanceof Array
                          ? checks
                          : [];

                      // Remove the deleted check from their list of checks
                      const checkPosition = userChecks.indexOf(id);
                      if (checkPosition > -1) {
                        userChecks.splice(checkPosition, 1);
                        userData.checks = userChecks;

                        _data.update(
                          "users",
                          checkData.userPhone,
                          userData,
                          err => {
                            if (!err) {
                              callback(200);
                            } else {
                              callback(500, {
                                Error: "Could not update the user"
                              });
                            }
                          }
                        );
                      } else {
                        callback(500, {
                          Error:
                            "Could not find the check on the user's object, so could not remove it"
                        });
                      }
                    } else {
                      callback(500, {
                        Error:
                          "Could not find the user who created the check, so could not remove the check from the list of checks on the user object"
                      });
                    }
                  });
                } else {
                  callback(500, { Error: "Could not delete the check data" });
                }
              });
            } else {
              callback(403);
            }
          }
        );
      } else {
        callback(400, { Error: "The specified check ID does not exist" });
      }
    });
  } else {
    callback(400, { Error: "Missing required field" });
  }
};

// Ping handler
handlers.ping = (data, callback) => {
  callback(200);
};

// Not found handler
handlers.notFound = (data, callback) => {
  callback(404);
};

// Export the module
module.exports = handlers;

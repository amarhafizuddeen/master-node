/*
 * Request handlers
 *
 */

//  Dependencies
const _data = require("./data");
const helpers = require("./helpers");

// Define the handlers
let handlers = {};

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
  const { firstName, lastName, phone, password, tosAgreement } = data.payload;

  // Check that all required fields are filled out
  const firstNameObj =
    typeof firstName == "string" && firstName.trim().length > 0
      ? firstName.trim()
      : false;
  const lastNameObj =
    typeof lastName == "string" && lastName.trim().length > 0
      ? lastName.trim()
      : false;
  const phoneObj =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim()
      : false;
  const passwordObj =
    typeof password == "string" && password.trim().length > 0
      ? password.trim()
      : false;
  const tosAgreementObj =
    typeof tosAgreement == "boolean" && tosAgreement == true ? true : false;

  if (
    firstNameObj &&
    lastNameObj &&
    phoneObj &&
    passwordObj &&
    tosAgreementObj
  ) {
    // Make sure that the user doesn't already exist
    _data.read("users", phoneObj, (err, data) => {
      if (err) {
        // Hash the password
        const hashPassword = helpers.hash(passwordObj);

        // Create the user object
        if (hashPassword) {
          let userObject = {
            firstName: firstNameObj,
            lastName: lastNameObj,
            phone: phoneObj,
            hashPassword: hashPassword,
            tosAgreement: true
          };

          // Store the user
          _data.create("users", phoneObj, userObject, err => {
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
  const { phone } = data.queryStringObject;
  const { token } = data.headers;

  // Check that the phone number provided is valid
  const phoneObj =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim()
      : false;

  if (phoneObj) {
    // Get the token from the headers
    const tokenObj = typeof token == "string" ? token : false;

    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(tokenObj, phoneObj, tokenIsValid => {
      if (tokenIsValid) {
        // Look up the user
        _data.read("users", phoneObj, (err, data) => {
          if (!err && data) {
            // Remove the hashed password from the user object before returning to the requester
            delete data.hashPassword;
            callback(200, data);
          } else {
            callback(404);
          }
        });
      } else {
        callback(403, {
          Error: "Missing required token in header or token is invalid"
        });
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
  const { firstName, lastName, phone, password } = data.payload;
  const { token } = data.headers;

  // Check for the required field
  const phoneObj =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim()
      : false;

  // Check for the optional fields
  const firstNameObj =
    typeof firstName == "string" && firstName.trim().length > 0
      ? firstName.trim()
      : false;
  const lastNameObj =
    typeof lastName == "string" && lastName.trim().length > 0
      ? lastName.trim()
      : false;
  const passwordObj =
    typeof password == "string" && password.trim().length > 0
      ? password.trim()
      : false;

  // Error if phone is invalid
  if (phoneObj) {
    // Error if nothing is sent to update
    if (firstNameObj || lastNameObj || passwordObj) {
      // Get the token from the headers
      const tokenObj = typeof token == "string" ? token : false;

      // Verify that the given token is valid for the phone number
      handlers._tokens.verifyToken(tokenObj, phoneObj, tokenIsValid => {
        if (tokenIsValid) {
          // Lookup the user
          _data.read("users", phoneObj, (err, userData) => {
            if (!err && userData) {
              // Update the field necessary
              if (firstNameObj) {
                userData.firstName = firstNameObj;
              }
              if (lastNameObj) {
                userData.lastName = lastNameObj;
              }
              if (passwordObj) {
                userData.hashPassword = helpers.hash(passwordObj);
              }
              // Store the new updates
              _data.update("users", phoneObj, userData, err => {
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
          callback(403, {
            Error: "Missing required token in header or token is invalid"
          });
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
  const { phone } = data.queryStringObject;
  const { token } = data.headers;

  // Check that the phone number provided is valid
  const phoneObj =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim()
      : false;

  if (phoneObj) {
    // Get the token from the headers
    const tokenObj = typeof token == "string" ? token : false;

    // Verify that the given token is valid for the phone number
    handlers._tokens.verifyToken(tokenObj, phoneObj, tokenIsValid => {
      if (tokenIsValid) {
        // Look up the user
        _data.read("users", phoneObj, (err, data) => {
          if (!err && data) {
            _data.delete("users", phoneObj, err => {
              if (!err) {
                callback(200);
              } else {
                callback(500, { Error: "Could not delete the specified user" });
              }
            });
          } else {
            callback(400, { Error: "Could not find the specified user" });
          }
        });
      } else {
        callback(403, {
          Error: "Missing required token in header or token is invalid"
        });
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
  const { phone, password } = data.payload;

  // Check that all required fields are filled out
  const phoneObj =
    typeof phone == "string" &&
    (phone.trim().length == 10 || phone.trim().length == 11)
      ? phone.trim()
      : false;
  const passwordObj =
    typeof password == "string" && password.trim().length > 0
      ? password.trim()
      : false;

  if (phoneObj && passwordObj) {
    // Lookup the user who matches that phone number
    _data.read("users", phoneObj, (err, userData) => {
      if (!err && userData) {
        // Hash the sent password, and compare it to the password stored in the user object
        const hashPassword = helpers.hash(passwordObj);
        if (hashPassword == userData.hashPassword) {
          // If valid, create a new token with a random token. Set expiration date 1 hour in the future
          const tokenId = helpers.createRandomString(20);
          const expires = Date.now() + 1000 * 60 * 60;
          const tokenObject = {
            phone: phoneObj,
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
  const { id } = data.queryStringObject;
  const idObj =
    typeof id == "string" && id.trim().length == 20 ? id.trim() : false;

  if (idObj) {
    // Look up the user
    _data.read("tokens", idObj, (err, tokenData) => {
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
  const { id, extend } = data.payload;

  // Check that all required fields are filled out
  const idObj =
    typeof id == "string" && id.trim().length == 20 ? id.trim() : false;
  const extendObj = typeof extend == "boolean" && extend == true ? true : false;

  if (idObj && extendObj) {
    // Lookup the token
    _data.read("tokens", idObj, (err, tokenData) => {
      if (!err && tokenData) {
        // Check to make sure the token has not already expired
        if (tokenData.expires > Date.now()) {
          // Set the expiration an hour from now
          tokenData.expires = Date.now() + 1000 * 60 * 60;

          // Store the new updates
          _data.update("tokens", idObj, tokenData, err => {
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
  const { id } = data.queryStringObject;
  const idObj =
    typeof id == "string" && id.trim().length == 20 ? id.trim() : false;

  if (idObj) {
    // Look up the token
    _data.read("tokens", idObj, (err, data) => {
      if (!err && data) {
        _data.delete("tokens", idObj, err => {
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

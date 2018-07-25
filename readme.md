[![Build Status](https://travis-ci.org/Develop-X/Json-MockServer.svg?branch=master)](https://travis-ci.org/Develop-X/Json-MockServer)
# Json Mock server

## Tools Required
 * Vscode
 * Nodejs

## Installation
 * npm install json-server -g

## Code
 * Add new js file using faker or casual
 * //Programmatically create 1000 users
    "test":"json-server users.js",
 * //Programmatically create dummy users
    json-server casual.js  
 * //Programmatically create dummy employee
    json-server employee.js
 * //start with routes
   "test":"json-server db.json --routes routes.json"   
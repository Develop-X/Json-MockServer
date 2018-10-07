[![Build Status](https://travis-ci.org/Develop-X/Json-MockServer.svg?branch=master)](https://travis-ci.org/Develop-X/Json-MockServer)

# Json Mock server

## Tools Required

- Vscode
- Nodejs

## Installation

- npm install json-server -g

## Code

- Add new js file using faker or casual
- //Programmatically create 1000 users
  "test":"json-server users.js",
- //Programmatically create dummy users
  json-server casual.js
- //Programmatically create dummy employee
  json-server employee.js
- //start with routes
  "test":"json-server db.json --routes routes.json"
- //start with json web token
  npm run api-auth

## json web token How to login?

You can login by sending a POST request to

```
POST http://localhost:3000/auth/login
```

with the following data

```
{
  "email": "nilson@email.com",
  "password":"nilson"
}
```

You should receive an access token with the following format

```
{
   "access_token": "<ACCESS_TOKEN>"
}
```

You should send this authorization with any request to the protected endpoints

```
Authorization: Bearer <ACCESS_TOKEN>
```

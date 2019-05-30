# Simple Node with Express + PostgreSQL Server using JSONB

[![Build Status](https://travis-ci.org/rogrs/padiola.svg?branch=master)](https://travis-ci.org/rogrs/padiola) 

An easy way to get started with a Express server with PostgreSQL with Node.js. 

##Deploy Heroku

<a href="https://heroku.com/deploy?template=https://github.com/rogrs/padiola">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

## Features

* Babel 7
* Environment Variables
* Express
* REST API
* PostgreSQL using Data Type JsonB
* Sequelizejs - [Ver](http://docs.sequelizejs.com/)

## Requirements

* [node & npm](https://nodejs.org/en/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

* `git clone https://github.com/rogrs/padiola.git`
* `cd padiola`
* `npm install`
* `npm start`
* optional: include *.env* in your *.gitignore*

### GET Routes

* visit http://localhost:3000/api/v1
  * /messages
  * /messages/1
  * /users
  * /users/1

### Beyond GET Routes

#### CURL

* Create a message with:
  * `curl -X POST -H "Content-Type:application/json" http://localhost:3000/api/v1/messages -d '{"text":"Hi again, World"}'`
* Delete a message with:
  * `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/api/v1/messages/1`

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a message with:
  * URL: http://localhost:3000/api/v1/messages
  * Method: POST
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi again, World" }`
* Delete a message with:
  * URL: http://localhost:3000/api/v1/messages/1
  * Method: DELETE

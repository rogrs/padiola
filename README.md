# Simple Node with Express + PostgreSQL Server using JSONB


An easy way to get started with a Express server with PostgreSQL with Node.js. 

##Deploy Heroku

<a href="https://heroku.com/deploy?template=https://github.com/rogrs/padiola">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

## Features

* Body-parser
* Environment Variables
* Express
* REST API
* PostgreSQL using Data Type JsonB
* Sequelizejs - [Ver](http://docs.sequelizejs.com/)

## Test

* Mocha — Test Framework
* Chai   — Test Framework
* Should  — Biblioteca para extender os testes
* Request — Para realizar as chamadas na API

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

* visit http://localhost:4200/api/v1
  * /behaviour
  * /behaviour/1
  * /users
  * /users/1

### Beyond GET Routes

#### CURL

* Create a message with:
  * `curl -X POST -H "Content-Type:application/json" http://localhost:4200/api/v1/behaviour -d '{"document":"{name:'T-003',ammout:100,member:'amanda'"}'`
* Delete a message with:
  * `curl -X DELETE -H "Content-Type:application/json" http://localhost:4200/api/v1/behaviour/1`

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a message with:
  * URL: http://localhost:4200/api/v1/behaviors
  * Method: POST
  * Body: raw + JSON (application/json)
  * Body Content: `{ document":"{name:'T-003',ammout:100,member:'amanda' }`
* Delete a message with:
  * URL: http://localhost:4200/api/v1/behaviors/1
  * Method: DELETE

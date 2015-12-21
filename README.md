CDTO-09  
Natalie Morcos  
11 jul 2014

Requirements
============

  + Node.js
  + Express 
  + Primus.io
  + ws
  + cors

Usage
=====

Install Dependencies:

    $ npm install

Start "noiseMaker" Server:

    $ npm start  

"Soundboard" client:

    student_distro/index.html  
    line 50: needs the address of the "noiseMaker" Server


RESTful API
===========

`GET /assigments`  
:  Get a unique pool number/ rank number pairing  
`{ "pool": ":pid", "rank" : ":rid" }`


Project Structure
=================

`app.js`

 :    Express based HTTP server / router

`functions.js`

 :    The main server logic

`primus_init.js`

 :     Dealing with socket communications


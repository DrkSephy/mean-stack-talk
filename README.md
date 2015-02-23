mean-full-stack
---------------

Minimal example of building a web application using ExpressJS, AngularJS, NodeJS and the Github API for a presentation within my `Advanced Topics in Web Programming` class.

Dependencies
------------

After cloning this repository, the first step is to install all dependencies. 

    mean-full-stack $ npm install
    mean-full-stack $ bower install

NOTE: If you are on a Mac, you will need to run `sudo npm install`. 

Getting Started
---------------

Inside of your Github account settings, please register this application in order to obtain a 
`client_id` and `client_secret`. This will allow you to make up to 5000 requests per hour, and
allows for quicker testing. For help on registering an application, see [this link](http://docs.codenvy.com/register-a-github-application/) Once you have obtained these keys, modify `config.js` as shown below:

    var CLIENT_ID = 'YOUR_CLIENT_ID';
    var CLIENT_SECRET = 'YOUR_CLIENT_SECRET';



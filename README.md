#Angular Starter
Machines like one big, uglified, file and engineers like many small, easily readable, files.  Managing, building, compiling and all the other stuff we engineers need to get from code to customer is a pain most of the time.  The Angular Template greatly reduces the pain of managing large AngularJS applications so we can focus on code and less on configuration.  This template allows you to engineer AngularJS applications in a modular and manageable fashion while harnessing the power of package managers, task runners, linters, preprocessors, development servers, automated testing, documentation tools and build tools.

##How does it work?
This template stitches together Node Package Manager (NPM), Webpack, Grunt, Jasmine and YUIDocs to create a single, simple and easy-to-use solution for AngularJS development. You can develop, test and build for production in one area with only three (3) commands.

**Run Development Server**
Spins up a Webpack development server.  This server listens for changes to .js files and live-reloads your environment when you save any change.  This works for your app and testing scripts.

- App Development Environment: http://localhost:8080/index.html
- App Testing Dashboard: http://localhost:8080/test.html

````
$ npm run dev
````

**Build JS Documentation**
Document your code with the YUIDocs annotations and run the following command to update the documentation. The command creates a the *./docs* directory with all your documentation.

````
$ npm run docs
````

**Create Production Distributions**
When you're ready to build all files production, run to following command.  It will create the *./dist* directory which holds all of your production-ready files.  It also rebuilds the *./docs* directory.

````
$ npm run dist
````

##Pre-Requisites
The template requires you to run a NodeJS server on your machine.  If you do not have NodeJS installed, visit https://nodejs.org/ for installation instructions. Once NodeJS is installed, you will need to install following tools, with their respective commands:

**WebPack** https://webpack.github.io/
````
$ npm install -g webpack
````
**Webpack Dev Server**  https://webpack.github.io/docs/webpack-dev-server.html
````
$ npm install -g webpack-dev-server
````
**Grunt**  http://gruntjs.com/
````
$ npm install -g grunt-cli
````
**YUIDoc**  http://yui.github.io/yuidoc/
````
$ npm install -g yuidocjs
````

#Getting Started

##Install Development Dependencies
When all the pre-requisites are successfully install, pull this repo and use NPM to install the development dependencies. When you run this command, you will see a new directory *node_modules* appear in the application root directory.

````
$ npm install
````

##Understanding the Default Directories
After installing the development dependency's, you will see 4 directories:

- ./loaders
- ./node_modules
- ./src
- ./test

###./loaders
This directory is where you can put any custom Webpack loaders required for your application.

###./node_modules
Contains all node modules your application will use for development or production.  By default, there are not any node modules required for the production build.

###./src
All of your AngularJS application source files.  There are three sub directories along with your app and testing entry points.

- ./src/app
- ./src/assets
- ./src/script

It is important to not modify the structure of *./src* directory.  Any modifications will potentially mess up the production build process.  If you require a different structure, make sure to modify the *Gruntfile.js* in the template root directory to ensure the JavaScript Tasks are properly configured.

**./src/index.html**
The main html file for your application.  Here you can add/remove any tags as necessary.  By default, the Webpack CSS and JS bundles are already referenced as well as links to a CDN with AngularJS, Angular UI Router, jQuery, and Twitter Bootstrap.

This file automatically updates with the Webpack Dev Server when you change any .js file in the *./src/app/* directory.  You can get access the development environment at http://localhost:8080/index.html.

**.src/index.js**
Webpack uses this file as the main application entry point; All references are bundled into the *bundle.js*.  By default, this file imports the main AngularJS application. 
 
**NOTE:** Make sure to reference any file in the *./src/assets* or *./src/scripts* directory your want complied into the *bundle.js*. With the exception of files in the *./src/app* directory, you will need to reference any CSS or JS file separately in *index.html* which is not complied into the *bundle.js*.  We will cover how to reference files in the *./asrc/app* directory in a different section.

**.src/test.html**
Your testing dashboard.  While you are developing, you can see all of your Jasmine tests by accessing http://localhost:8080/test.html.  

**NOTE** This does not get built into the production files.  It is a live-refresh when you change any .js file in the *./test* directory.

#### ./src/app
This is the directory where all your AngularJS application-specific Controllers, Views, Factories, Services and Directives reside.  By default, all sub folders are organized by concern then by domain.

It is **VERY IMPORTANT** to understand how these files are complied into the main application.  Folder structure does note mean anything in the *./src/app* directory because all .js files are CommonJS/AMD compatible modules.

Each default directory has a .js file title *'registered[FolderName].js'*.  This is where import the modules of your AngularJS app.

Some children modules are actually modules of other modules, like the default *./src/app/core/* directories.  For example, since the *./src/app/core/header* is made up of a controller and directive, an intermediary module, *./src/app/core/header/header.js*, was created which references the header controller and directive.  Then this intermediary module is referenced in the *./src/core/registeredCore.js* module.

**app.js**
The file where the main AngularJS application is declared and all modules are rolled up into.  If you do not modify the way modules are registered by default, you will never need to touch this file.  If you decided to change they way the children modules of the template are imported and registered, you may need to modify this file.

**app.confg.js**
The file where you configure routing states.

###./src/assets
This directory is where all non-AngularJS application files such as vendor files and images are stored.  You can bundle these files as well if you require them in the */.index.js* file.

It **is NOT generally recommended** to bundle any vendor files.  The more files your bundle into your *bundle.js*, the larger the bundle becomes.  

It is generally recommended to reference any static vendor files at the *index.html*.

###./src/script
This directory is where are non-AngularJS application files such as JS, CSS, LESS or SASS.  You can bundle these files as well if you require them in the */.index.js* file.

It **is recommenced** to bundle these files.  The default configuration provides pre-processors for LESS and SASS and an ECMAScript6 transplier.  If you do write your JavaScript to the ECMAScript6 spec, make sure to end the file with *.es6* so it can be easily identified and transplied in to ECMAScript5.

##./test
This directory contains all your test specs.  The strucutre of any sub-directory is not important.

These test specs are CommonJS/AMD modules as well.  Be sure to include all new specs into the *./test/index.js* file so they can be bundled into the *testBundle.js*.
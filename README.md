# Extending Your JavaScript Toolbox
This repo contains resources for my Dreamforce 2017 presentation. A PDF of the slides is available in the presentation directory. I’ll also post a link to the presentation video when it is made available by Salesforce.

To get started implementing your own local development server, start by installing all of the elements listed below in the prerequisites, you'll need these in place in order to utilize all of the features. The Sublime Text w/Mavenmate integration allows you to follow the presentation more exactly, but is not totally necessary. You could certainly use a different text editor and skip over the Mavensmate tooling, but please be aware you’ll miss out on a few features like direct saves to Salesforce.

## Prerequisites:
##### Sign-up for a Salesforce Dev Org:
https://developer.salesforce.com/signup
##### Install Node / NPM:
https://nodejs.org/en/download/
##### Download Sublime Text and add the Mavensmate Package:
https://www.sublimetext.com/3 https://github.com/joeferraro/MavensMate-SublimeText
•    Note: The MavensMate project is no longer under active development. There may be better options for saving and compiling Visualforce Pages and Static Resources in Salesforce very soon. You should be able to integrate those tools without much issue.

Tutorial for setting up Mavensmate and creating a Force.com project: https://www.xgeek.net/salesforce/sublime-text-3-mavensmate-for-salesforce-development/

## Setting Up Your Project:
First you’ll need to create a Force.com project, follow the steps near the bottom Xgeek tutorial listed above. Once the project is created, you’ll need to create a Visualforce Page and a Static Resource. The Static Resource should be named _bundle_js.resource_ to work with the existing tooling. If you choose a different name, make sure to update the reference in _bundle-to-resource.js_.

The most important part of the Visualforce Page is having have the two script tags pointing to _bundle_js.resource_, and _localhost_. The _localhost_ tag should be uncommented when working locally, while _bundle_js.resource_ should be commented out. When going to production, switch this so that the _localhost_ tag is commented out and _bundle_js.resources_ in uncommented. See the _dfdemo.page_ in the example directory for an example of how the tags should look when developing locally. You can copy the contents, but not the file itself - create the page and any static resource from mavensmate to correctly generate the metadata file also.

Next you can copy the following files from this repo into the root of your project:
*   package.json
*   webpack.config.js
*   bundle-to-resource.js
*   .babelrc

We can then install our node modules by opening the terminal at your project directory and running:

    npm install
    (if this command fails you may need to run sudo npm install )
    
This will install all of the required node modules into the node_modules folder. If you’re using version control, be sure to ignore this folder before committing other changes. If there are any modules that you don’t need, like the Draggable package that I use in the presentation, you can uninstall with:

    npm uninstall draggable –save
    (use –save-dev if the package is listed under devDependecies in package.json)
    
###### Important:
You will also need to create the directory _/app_ and add an _app.js_ file to it. Webpack will be looking to serve that file.

## Fire Up Webpack:
Webpack was installed locally via the npm install command, so we can now run it from the terminal (the same root directory where you ran npm install). The command for starting webpack is in the _package.json_ file, within the “scripts” block. These NPM Scripts allow us to use aliases for more complex commands, the “server” command is the one we need to start our dev server, and can be run with:

    npm run server
    
•    note that test,start,restart and stop don’t need the run command. Here were calling “server” so it does need the run command.
To kill the server at any time, press Control + C in the terminal.
When Webpack gets started, you see that it is running on port 8080:
Project is running at https://localhost:8080/

###### Important:
Navigate to https://localhost:8080 to make sure it is accessible. If you don’t see a listing of your directories, but instead a warning that (in Chrome) “Your connection is not private” you will need to click the Advanced options link and select “Proceed to Localhost (unsafe)”. In Firefox, you may be asked to make a security exception for localhost.

![Chrome Localhost Error](/img/localhost-proceed.png?raw=true "Chrome Localhost Error")

Now you can open your Visualforce page in Salesforce, and the Javascript that you’ve added to _app.js_ should be running!

## Moving to Production:
Once you’ve completed your local development and testing. It is time to comment out the localhost script tag and uncomment the _bundle_js.resource_ tag on your Visualforce page. Once that is saved, you can kill your local server (Control+C) and run the prod-bundle script:

    npm run prod-bundle
    
Finish by saving your _bundle_js.resource_ file to Salesforce and you should be good to go!


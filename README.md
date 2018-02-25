# Feed Reader Testing Project

## Table of Contents

* [Project Attribution](#attribution)
* [Dependencies](#dependencies)
* [Playing the Game](#playing-the-game)
* [Running on a Local Server](#running-on-a-local-server)

## Project Attribution

This project is an extension of a [starter project](https://github.com/udacity/frontend-nanodegree-feedreader) provided by Udacity, as part of their Front End Web Developer NanoDegree program. The starter project provided a working RSS feed reader application which connects to a collection of RSS feeds. The project also provided the [Jasmine](http://jasmine.github.io/) testing framework and a starting spec file containing the project's instructions. As a student, I was required to fill out the test cases described in the spec file, and confirm that the existing project met all of the testing requirements.

Source code for this project is available at `https://github.com/jcorpac/frontend-nanodegree-feedreader`

## Dependencies

The feed reader is built using HTML and JavaScript, and the files required for retrieving RSS feeds and executing the test cases are included in the repository. The index.html file contains tags referring to external resources, and the application retrieves data from internet resources, so a working internet connection is required for the application to work, and to pass the test cases.

## Running the Application

All of the files required to retrieve and display RSS feeds are included in the repository. Loading the index.html file from the root folder will start the application in a browser window, and will start the JavaScript code to retrieve feed links to be displayed.

As the page is loaded into the browser, the Jasmine framework will begin executing its test cases. The results of the test cases will be displayed at the bottom of the page. If any of the test cases fail, then a stack trace to analyze the point of failure will appear in the test results.

## Running on a Local Server
This page is designed to run in any web browser with JavaScript enabled. As such, it can be run from a folder on your local machine, or from any web server. A recommended web server for your local machine is [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en).

If your computer has the Python interpreter installed on it, you can run the page by running the command line from the project folder and entering `python -m SimpleHTTPServer 8080`. The page with the portfolio will be available at `http://localhost:8080/`.

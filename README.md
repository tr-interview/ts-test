# Technical test task

This test is designed to test your Typescript skills. The basic project should provide you all that you need to get up and running, all you need to do is to add your code and run. 

## The Rules
You have 30 minutes for this test. Feel free to use Google and the official docs. Please don't use any AI code generating tools.

## Getting started
Clone a copy of this repo to your local environment

Then install all the required dependancies of this project by running 
```npm install```

Then you should be able to build this project with 
```npm run build```

Your final output should be to the console and should be ran by using the 
```npm run start``` 
command, please adjust `package.json` file as required.


# The Test
We would like you to create a script using Typescript to help us manage our Github repositories. The Github organisation `tr-interview` contains a number of private repositories. 

Please write a script the will fetch the name of all of the private repositories in this organisation via the Github API and output them to the console. 

We have supplied a Github personal access token which will give you access to this organisation via the API. 

When you have completed the test locally, please commit your script back to your personal repository, you shoudl then provide us with a link to this repository so we can validate your script. 

Please make sure that you follow security best practices and DO NOT commit any secrets back to Github. 

## Bonus Points
If there is still time remaining please do the following:

* Create a Dockerfile that will run your script
* Build your Dockerfile into an image called tstest
* Run a Docker container using your new image which outputs the repo names to the console.

# Hosting a Full-Stack Application


## About:
This Project is mainly about hoisting a Full-Stack Application (Frontend, Backend and postgres Database), the platform which is used to deploy this project is AWS 

```
S3 : For Hoisting Front-End Front
Elastic Beanstalk : Hoisting Api
RDS : For Hoisting DataBase
```
## Links : 

 ## - [Front End](http://udagram-frontend-udacity.s3-website-us-east-1.amazonaws.com)
 ## - [server](http://udagram-api-dev.eba-wepmqniy.us-east-1.elasticbeanstalk.com/)
 ## - [database host](database-1.c87xf7wiotlh.us-east-1.rds.amazonaws.com) 


## Service Digram :
- ![Hoisting Digram](/screenshots/digram.png)



### Dependencies

```
- Node v14.0.0 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent.

- AWS CLI v2, v1 

- A RDS database running Postgres.

- A S3 bucket for hosting.

```

## images : 

![Elastic Beanstalk Screenshot](/screenshots/elasticbeanstack%20.png "Server").
![Database Screenshot](/screenshots/database.png "Data Base").
![s3 Screenshot](/screenshots/s3.png "Front end").



## Pipline 


### Installation
Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres. <Place holder for link to classroom article>
1. In AWS, provision a s3 bucket for hosting the uploaded files. <Place holder for tlink to classroom article>
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

## License

[License](LICENSE.txt)

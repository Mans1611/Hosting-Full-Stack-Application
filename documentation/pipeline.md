# Udagram :

## Pipeline Process : 

### Pipeline Diagram
 ![PipeLineDigram](/screenshots/pipelinedig.png)
 ![Env_Variables](/screenshots/envvar.png)
### Orbs : 
which is the construction of the pipeline to configure it and in this pipeline we need to configure :
- Node envirounment 
- AWS-CLI 
- Elastic BeanStalk

### jobs : 
- Install Front-End Dependencies : 
    which download all the dependencies for front end 
- Install API-End Dependencies : 
    which download all the dependencies for the server.

- Front-End Build : 
    which build the front end in the www folder.

- API Build : 
     which build the api in the dist folder, so it be ready for production.

- FrontEnd Deploy :
    Which deploy the front end after being built on the S3.

- Deploy App : 
    Which it gather between deploying the front end and the backend, so it full deploy the full app.

## Images :
- Success Building PipeLine
![pipeLine Sucess](/screenshots/piplelinesuc.png "pipeLine")
- CircleCi
![circleCi](/screenshots/circle.png)

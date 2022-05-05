# fbi-missing-person-api

This is a project to make more aware of missing children. This project takes data that was created from https://github.com/jaysnel/fbi-missing-person-db and exposes this to the public as an API.

This project is for non-commercial, and not for profit.

Call GET request to: (Note that heroku goes to sleep after some time, so you may need to hit this and wait awhile. Sorry, job doesnt pay me enough to have things continuously running hot :shrug-emoji:)
https://fbi-missing-person-api.herokuapp.com/v1/all

Data uses mongoDB so you will need to create an account(free) and use these environment variables for the app to run succesfully:

```
CLUSTER_USERNAME=******
CLUSTER_PASSWORD=******
DATABASE_NAME=******
COLLECTION_NAME=******
```

This data is being created from https://github.com/jaysnel/fbi-missing-person-db. Within this repo, you will need to make sure that ```COLLECTION_NAME``` and ```DATABASE_NAME``` match what is in the ```fbi-missing-person-db``` repo or it will fail. This repo calls the data sitting in that database, and the ```fbi-missing-person-db``` creates the data that it uses.

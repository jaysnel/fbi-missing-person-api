# fbi-missing-person-api

This is a project to make more aware of missing children. This project takes data that was created from https://github.com/jaysnel/fbi-missing-person-db and exposes this to the public as an API.  The FBI did not provide an API for this data, so I decided to create a database myself.

This project is for non-commercial, and not for profit.

Call GET request to: (Note that heroku goes to sleep after some time, so you may need to hit this and wait awhile. Sorry, job doesnt pay me enough to have things continuously running hot :shrug-emoji:)
https://fbi-missing-person-api.herokuapp.com/v1/all

To run locally:

1. Pull down both https://github.com/jaysnel/fbi-missing-person-api and https://github.com/jaysnel/fbi-missing-person-db 

2. cd into ```fbi-missing-person-api``` and run ```npm install```

3. cd into ```fbi-missing-person-db``` and run ```npm install```

4. Create an account at https://www.mongodb.com/ if you do not already have one

5. Within mongoDB you will need to create a cluster that will incldue a database and a collection.(Tutorial coming soon for setting this up and I will link here later. For now, you'll need to use something like, I don't know, Google. I guess.)

6. cd into ```fbi-missing-person-api``` and create a ```.env``` file within the directory and add:
```
CLUSTER_USERNAME=******
CLUSTER_PASSWORD=******
DATABASE_NAME=******
COLLECTION_NAME=******
```
replacing ```******``` with your own values

7. cd into ```fbi-missing-person-db``` and create a ```.env``` file within the directory and add:
```
CLUSTER_USERNAME=******
CLUSTER_PASSWORD=******
DATABASE_NAME=******
COLLECTION_NAME=******
```
replacing ```******``` with your own values

If you do not wish to use twilio for SMS alerting, remove lines ```13-18```, ```117-120``` and ```129-140``` inside of ```fbi-missing-person-db/serve.js``` to avoid errors.

If you wish to use twilio for SMS alerting, add the following inside of the ```.env``` file in ```fbi-missing-person-db```:

```
TWILIOPHONENUMBER=******
PHONENUMBER=******
ACCOUNTSID=******
AUTHTOKEN=******
```
replacing ```******``` with your own values

8. cd into ```fbi-missing-person-db``` and run ```node serve.js```. 
This will bring up a browser window for each person. This can be annoying at times. So to avoid, you can comment out line ```75``` and uncomment line ```76```. 

9. cd into ```fbi-missing-person-api``` and run ```node serve.js```

10. Navagitate to localhost:8080 

11. Check console to verify port

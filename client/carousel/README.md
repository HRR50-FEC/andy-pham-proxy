# This repo contains a working dynamic clone of the carousel featured on the listing page for products on etsy.com

Upon opening this repo, please run

```
npm install
```

in order to install all of the dependencies necessary for this project.


######

This project has been created using **webpack scaffold**, in order to bundle all files, please run

```
npm run build
```

The database for this module was build using mongo database 4.4.3

information on how to install mongo DB can be found here https://docs.mongodb.com/manual/installation/

# Setup process and requirements
*in order to get this repo started, you will need a token for the unsplash api*

*Next, you will create a config.js file in the root directory using the configEXAMPLE.js file as a template. do not proceed until you have a token for the api*

An API token can be obtained for FREE at https://unsplash.com/developers

The database can be seeded using the script

```
npm run db:seed
```

This will seed the database using the unsplash API and will seed the database with 600 images. This has been updated. Please reach out if there are any issues with the queries that are featured in this seeding script.


The following are  images of the expected results of the operations of this repo

![Alt text](https://i.imgur.com/BDd7w4O.png "Main Carousel Page")
![Alt text](https://i.imgur.com/RoYj3gm.png "Expanded View")

On pageload, a GET request is sent to the server to obtain 6 images at a time based on the way the seeding algorithm parses api pulls from unsplash. This can be changed by editing the seeding function or editing the amount of samples are derived from the api call.


This is simply for testing purposes, but the template is easy to to change to work with any length of data as long as the data is shaped like in  *sampleData.js*
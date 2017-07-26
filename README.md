# Activities

## To set up the project locally

### Install the dependencies

TBA

### Create a database locally and set up access to it
Within the terminal, type in the following:
```
psql postgres   <!-- This will start PostgreSQL within the terminal -->
CREATE DATABASE activities;
CREATE USER <user-name> WITH PASSWORD <password>;
    <!-- If you already have a postgres user set up, you can skip this step -->
GRANT ALL PRIVILEGES ON DATABASE activities TO <user-name>;
<!-- Connect to the database to ensure that the code you're running is executed on this database -->
\connect activities;
```

### CREATE THE DATABASE TABLE
Within the terminal, type in the following:
```
node models/database.js
<!-- Or, if you have nodemon installed: -->
nodemon models/database.js
```
This will run the database.js file, which will create the activity_options database table.

### View the full table in the terminal
Within the terminal, type in the following:
```
SELECT * FROM activity_options;
```

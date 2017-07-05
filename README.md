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
\connect activities;
```

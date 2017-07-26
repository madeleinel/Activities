// Set up the PostgreSQL client for Node.js entitled 'pg'
var pg = require('pg'),
    // Set connectionString to be the default url provided by the system(?) or the PostgreSQL port for the relevant database
    connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/activities',
    // A client is established to interact with the database
    client = new pg.Client(connectionString);
// A connection/communication with the database is established for the client using connect()
client.connect();

////////////////////////////////////////////////////////////////////////////////////////////////
//////// Below function; only need to run once (as only need to create the table once) ////////
////////////////////////////////////////////////////////////////////////////////////////////////
// var query = client.query (
  // For each activity being saved into the database, provide:
  // - The item id (automatically increasing integer)
  // - A name of min 1 and max 20 characters
  // - A time estimation of 1-8 characters, and
  // - A category nomination of 1-10 characters
  // 'CREATE TABLE activity_options(id SERIAL PRIMARY KEY, name VARCHAR(20) not null, time VARCHAR(8) not null, category VARCHAR(10) not null)');
// The connection between the database and the client is closed via end()
// query.on('end', () => { client.end(); });
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// Add data to the table

// Retrieve data from the table

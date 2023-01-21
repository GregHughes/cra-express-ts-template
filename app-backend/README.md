# Getting Started

After install, start the mongod daemon with the preset "--dbpath" of 'mongodb'.

NOTE: You can change the dbpath, but be sure to update the folder name at /app-backend/mongodb.

- Type 'mongod --dbpath ./mongodb/' in the terminal while in the /app-backend directory

Then use the mongo shell (installed as a dependency) to create a database.

- Type 'mongo' in the terminal
- Then 'use {database name}'

Next, insert an array of JSON object(s) as "documents" inside of a "collection".

- Type 'db.{collection name}.insertMany({documents})'

You can then check the documents in the database.

- Type 'db.{collection name}.find({}).pretty()'

After creating the database with or without any documents or collections, update the database name in 'src/db.js' at Line 8, Column 21.

## Scripts

### `npm run dev`

Starts the 'mongod' daemon and 'nodemon' on separate processes within the same terminal.


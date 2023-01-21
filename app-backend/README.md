# Getting Started

After install, create an empty directory inside of /app-backend such as "/app-backend/mongodb".

Then start the mongod daemon with "--dbpath" set to your new directory.

- Type 'mongod --dbpath ./{directory name}/' in the terminal while inside of the /app-backend directory

Use the mongo shell (installed as a dependency) to create a database.

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


// index.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const getTaskSchema = require('./taskSchema');
const taskResolver = require('./taskResolver');
const db = require('./db');

const app = express();


db.on('connected', () => {
  console.log('Connected to MongoDB');
});


const root = taskResolver;


app.use('/graphql', graphqlHTTP({
  schema: getTaskSchema(),
  rootValue: root,
  graphiql: true,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

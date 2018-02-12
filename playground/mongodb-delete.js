// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log(err);
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
// db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
//   c

// db.collection('Users').deleteMany({ name: 'Andrew' }).then(result => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({ _id: new ObjectID('5a7fb8720cbbfb34d42feb75') }).then(result => {
  console.log(result);
});

  // client.close();
});

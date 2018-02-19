const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a8aae0eae402ccf9c4c65de' }).then((todo) => {

// });

Todo.findByIdAndRemove('5a8aae0eae402ccf9c4c65de').then((todo) => {
  console.log(todo);
});
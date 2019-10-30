var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BooksSchema = new Schema({

  author: {
    type: String,
  },
  category: {
      type: String
  },
  description:{
    type: String
},
href: {
    type: String
},
src: {
    type: String
}

})
// This creates our model from the above schema, using mongoose's model method
const Books = mongoose.model("Books", BooksSchema);

// Export the User model
module.exports = Books;

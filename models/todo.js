// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Todo = sequelize.define("Todo", {
    //add a text column of type string. Do not allow null. Limit length to 140 chaacters.
    routeName: Sequelize.STRING,
   
    text: {
        type:Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [1,140]
        }
    },
    complete:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
    
   
});
// Syncs with DB
// ToDo.sync();

// Syncs with DB
Todo.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Todo;




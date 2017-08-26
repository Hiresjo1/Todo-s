// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var Todo = require("../models/todo");
// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res){
    // console.log("I'm Hit!");
    Todo.findAll({})
      .then(function(result) {
        // return res.json(result);
        res.json(result);
      });
  });
  
  // POST route for saving a new todo
  app.post("/api/todos", function(req, res){
    // console.log("I'm Hit!");
    // console.log(req.body);
    var task = req.body;
    Todo.create({
      text: task.text,
      complete: task.complete
    }).then(function(result){ // .done only runs on success... .then runs on success or not
      res.json(result); //make sure we send a result back over to the front end
    });
  });
  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
	app.delete("/api/todos/:id", function(req, res){
		var removeTodo = req.params.id;
    // console.log("deleted");
	Todo.destroy({
		where: {
			id: removeTodo
		}
	});

});
  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res){
    console.log(req.body);
    var task = req.body;
    Todo.update({
      complete: task.complete,
    },{
      where: {
        id: task.id
      }
    }).then(function(result){
        res.json(result);
    });
  });
};





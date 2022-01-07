const Todo = require('../models/Todo');
const View = require('../views/todoView')

class TodoController{
    static help(){
        View.help()
    }
    static list(){
        let todos = Todo.list()
        View.list(todos)
    }
    static add(params){
        let result = Todo.add(params)
        View.message(result)
    }
    static message(msg){
        View.message(msg)
    }
}

// TodoController.help();
module.exports = TodoController;
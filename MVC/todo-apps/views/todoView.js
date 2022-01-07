class ViewTodo {
    static help(){
        console.log("TO DO LIST COMMAND")
        console.log("node index.js help")
        console.log("node index.js list")
        console.log("node index.js add <task_name>")
        console.log("node index.js delete <task_id>")
        console.log("node index.js update <task_id>")
    }
    static list(todos){
        console.log(todos)
    }
    static message(msg){
        console.log(msg)
    }
}

module.exports = ViewTodo
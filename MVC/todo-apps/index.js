const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require('./controllers/todoController')

switch (command) {
    case 'help':
        TodoController.help();
        break;
    case 'list':
        TodoController.list();
        break;
    case 'add':
        TodoController.add(params);
        break;
    case 'delete':
        TodoController.delete(params);
        break;
    case 'update':
        TodoController.update(params);
        break;
    default:
        TodoController.message("Unknown Command");
        break;
}
/**
 *  Buat aplikasi todolist sederhana menggunakan mvc
 * Ada command :
 * node index.js help
 * node index.js list
 * node index.js add "Makan bersama"
 * node index.js delete
 * node index.js update 1 "Minum bersama"
   */
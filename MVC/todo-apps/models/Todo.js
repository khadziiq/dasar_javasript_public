const fs = require('fs')
// const { PassThrough } = require('stream')

class Todo {
    constructor(id, task, type){
        this.id = id
        this.task = task
        this.type = type
    }
    static list(){
        let data = fs.readFileSync('./data.json','utf8')
        let parseData = JSON.parse(data)

        let result = parseData.map(data =>{
            const {id, task, type} = data
            return new Todo(id, task, type)
        })
        return result
    }
    static add(params){
        const[task, type] = params
        let list = this.list()
        let id = list[list.length-1].id + 1
        list.push(new Todo(id, task, type))

        this.save(list)
        return `${task} has been added`
    }
    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3))
    }
}

module.exports = Todo;
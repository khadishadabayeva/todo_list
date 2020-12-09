const fs = require('fs')
const moment = require('moment')

const todoList = [
    {
        text: 'Go shopping'
      },
      {
          id: '1'
      },
      {
        done: 'false'
    }
]
const json = JSON.stringify(todoList)
fs.writeFileSync('todo.json', json)



/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app, Datastore } from 'codehooks-js'
import { date, object, string, number, boolean} from 'yup';
import {crudlify} from 'codehooks-crudlify'

const todoItem = object({
  userid: string().required(),
  todoId: number().required(),
  todo: string().required(),
  isDone: boolean().default(true),
  dateCreated: date().default(() => new Date()),
})

// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send('CRUD server ready')
  console.log("hello")
})

app.post('/todoList',addTodolist()); 
app.get('/todoList', getTodolist()); 

async function addTodolist(req, res){
  const conn = await Datastore.open();
  const doc = conn.insertOne("todoItem").json(res);

  res.status(201).json(doc);
}

async function getTodolist(req, res){
  const conn = await Datastore.open();
  conn.getmany("todoItem").json(res);

}

// Use Crudlify to create a REST API for any collection
crudlify(app, {todolist: todoItem})

// bind to serverless runtime
export default app.init();

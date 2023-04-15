
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app, Datastore } from 'codehooks-js'
import { date, object, string, number, boolean} from 'yup';
import {crudlify} from 'codehooks-crudlify'

const todoItem = object({
  userid: string().required(),
  todo: string().required(),
  isDone: boolean().default(false),
  dateCreated: date().default(() => new Date()),
})

// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send('CRUD server ready')
  console.log("hello")
})

// Use Crudlify to create a REST API for any collection
crudlify(app, {todolist: todoItem})

// bind to serverless runtime
export default app.init();

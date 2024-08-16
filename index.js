const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.listen(port, () => {
  console.log('サーバーが起動しました')
})

// req: リクエスト情報を含むオブジェクト
// res: レスポンス情報を含むオブジェクト
// app.get(パス, コールバック関数)2つを引数に取る
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const customers = [
  { id: 1, name: '山田太郎', age: 35 },
  { id: 2, name: '佐藤花子', age: 25 },
  { id: 3, name: '田中一郎', age: 20 }
]

// GET /customers で顧客情報を取得する
app.get('/customers', (req, res) => {
  res.send(customers)
})

// POST /customers で顧客情報を追加する
app.post('/customers', (req, res) => {
  const customer = {
    id: customers.length + 1,
    name: req.body.name,
    age: req.body.age
  } 
  customers.push(customer)
  res.send(customer)
} )

// PUT /customers/:id で顧客情報を更新する
app.put('/customers/:id', (req, res) => {
  const id = req.params.id
  const customer = customers.find(customer => customer.id === parseInt(id))
  customer.name = req.body.name
  customer.age = req.body.age
  res.send(customer)
})

// DELETE /customers/:id で顧客情報を削除する
app.delete('/customers/:id', (req, res) => {
  const id = req.params.id
  const customer = customers.find(customer => customer.id === parseInt(id))
  const index = customers.indexOf(customer)
  customers.splice(index, 1)
  res.send(customer)
} )

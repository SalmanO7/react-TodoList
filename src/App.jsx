import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTodos from './compenents/create/CreateTodos'
import TodosTable from './compenents/todosTable/TodosTable'
import UpdateTodos from './compenents/updateTodos/UpdateTodos'
import './App.css'

const App = () => {
  return (

    <main className='container'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CreateTodos />} />
          <Route exact path='/TodosList' element={<TodosTable />} />
          <Route exact path='/UpdateTodos' element={<UpdateTodos />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
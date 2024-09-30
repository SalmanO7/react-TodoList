import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const CreateTodos = () => {

    const [todoName, setTodoName] = useState('')
    const [todoDescription, setTodoDescription] = useState('')
    const todosLIst = useNavigate();
    const header = { "Access-Control-Allow-Origin": "*" }

    const handleNavigate = () => {
        todosLIst('/TodosList');

    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`https://66f874be2a683ce9730f80c1.mockapi.io/api/todolist/todolist-app`, {
            name: todoName, description: todoDescription, header,
        }).then(() => {
            todosLIst('/TodosList');
        })
    }
    return (
        <>
            <div className="header" style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Create Todo</h2>
                <Link to='/TodosList'>
                    <button className='btn btn-success'> Show Data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="todo" className="form-label">Add Your Todo</label>
                    <input type="text" required className="form-control" onChange={(e) => setTodoName(e.target.value)} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDescription" className="form-label">Add Description of Your Todo</label>
                    <input type="text" required className="form-control" onChange={(e) => setTodoDescription(e.target.value)} />
                </div>
                <button type="submit" onClick={submitHandler} className="btn btn-primary">Create</button>
            </form>
        </>
    )
}

export default CreateTodos
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateTodos = () => {

    const [todoId, setTodoId] = useState(0)
    const [todoName, setTodoName] = useState('')
    const [todoDescription, setTodoDescription] = useState('')
    const todosLIst = useNavigate()

    useEffect(() => {
        setTodoId(localStorage.getItem('id'))
        setTodoName(localStorage.getItem('name'))
        setTodoDescription(localStorage.getItem('description'))
    }, [])

    const editHandler = (e) => {
        e.preventDefault()
        axios.put(`https://66f874be2a683ce9730f80c1.mockapi.io/api/todolist/todolist-app/${todoId}`, {
            name: todoName, description: todoDescription,
        }).then(() => {
            todosLIst('/TodosList');
        })
    }

    return (
        <>
            <h2>Update Todo</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="todo" className="form-label">Add Your Todo</label>
                    <input type="text" value={todoName} className="form-control" onChange={(e) => setTodoName(e.target.value)} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDescription" className="form-label">Add Description of Your Todo</label>
                    <input type="text" value={todoDescription} className="form-control" onChange={(e) => setTodoDescription(e.target.value)} />
                </div>
                <button type="submit" onClick={editHandler} className="btn btn-primary mx-2">Update</button>
                <Link to='/TodosList'>
                <button className='btn btn-primary mx-2'>Back</button>
                </Link>
            </form>
        </>
    )
}

export default UpdateTodos
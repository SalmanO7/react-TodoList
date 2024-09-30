import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const TodosTable = () => {
    const [todoData, setTodoData] = useState([])
    const getData = () => {
        axios.get(`https://66f874be2a683ce9730f80c1.mockapi.io/api/todolist/todolist-app`)
            .then((res) => {

                setTodoData(res.data)
            })
    }
    const navigate = useNavigate()
    
    const createTodos = () => {
        navigate('/')
    }

    const deleteTodo = (id) => {
        axios.delete(`https://66f874be2a683ce9730f80c1.mockapi.io/api/todolist/todolist-app/${id}`)
            .then(() => {
                getData()
            })
    }

    const setToLocalStorage = (id, name, description) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('description', description)
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="header" style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
                <h1>Your Todos</h1>
                <button className='btn btn-primary px-2 py-0'
                    onClick={createTodos}
                >Create Todos</button>
            </div>
            <table className="table">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Todo Name</th>
                        <th scope="col">Todo Description</th>
                        <th scope="col">Edite</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {todoData.map((todo) => {
                    return (
                        <tbody key={todo.id}>
                            <tr>
                                <th scope="row">{todo.id}</th>
                                <td>{todo.name}</td>
                                <td>{todo.description}</td>
                                <td>
                                    <Link to='/UpdateTodos'>
                                        <button
                                            onClick={() =>
                                                setToLocalStorage(
                                                    todo.id,
                                                    todo.name,
                                                    todo.description
                                                )} className='btn btn-success'
                                        >Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>
        </>
    )
}

export default TodosTable
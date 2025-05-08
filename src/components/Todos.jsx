import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
    const {loading,todos,error} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch])
  return (
    <div>
      <h2>Todos App</h2>
      {loading && <h3>Loading....</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos && todos.map((todo) =>{
            return <article key={todo.id}>
                <h4>{todo.id}</h4>
                <h4>{todo.title}</h4>
            </article>
        })}
      </section>
    </div>
  )
}

export default Todos


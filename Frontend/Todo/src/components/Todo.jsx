import React,{ useEffect, useState }from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchTodos,addTodo } from '../features/todoSlice';


function Todo() {


    const todos = useSelector(state => state.todos.items);
    const [todo,setTodo] = useState('')

    const handleForm = (e) =>{
        const newTodo = e.target.value
        setTodo(newTodo)
    }

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(fetchTodos());
    },[dispatch]);

    const handleAddTodo = () =>{
        dispatch(addTodo({ content:todo , completed:'false'}));
    }


  return (
    <div>
      <input type='text' value={todo} onChange={handleForm}>
      </input>
      <button onClick={ handleAddTodo }>Submit</button>
      <ul>
        {todos.map(todo => (
            <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

// // TodoList.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTodos, addTodo } from './slices/todosSlice';

// const TodoList = () => {
//   const todos = useSelector(state => state.todos.items);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   const handleAddTodo = () => {
//     dispatch(addTodo({ title: 'New Todo', completed: false }));
//   };

//   return (
//     <div>
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;

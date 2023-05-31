import './App.css';

import todoSlice, { add, remove, toggleCompleted } from './features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';

function App() {
   const todos = useSelector((state) => state.todos);
   const [title, setTitle] = useState('');

   const dispatch = useDispatch();

   const onSave = () => {
      dispatch(add(title));
      setTitle('');
   };

   const onDelete = (id) => {
      dispatch(remove(id));
   };

   const toggle = (id) => {
      dispatch(toggleCompleted(id));
   };
   return (
      <div className="App">
         <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
         />
         <button onClick={onSave}>Save</button>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  <button onClick={() => toggle(todo.id)}>
                     {todo.completed ? 'Mark Not Completed' : 'Mark Completed'}
                  </button>
                  <button onClick={() => onDelete(todo.id)}>Delete</button>
                  <span>{todo.title}</span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default App;

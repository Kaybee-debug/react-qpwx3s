import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

function Todo({todos,completeTodo,removeTodo,updateTodo,submitUpdate,}){
  const [edit,setEdit] = useState({
    id: null,
    value: ''
  });
  const onSubmit = value =>{
    updateTodo(edit.id,value)
    setEdit({
      id: null,
      value: ''
    })
  }
  if (edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }
  return todos.map((todo,index) =>( 
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
<div key={todo.id} onClick={() => completeTodo(todo.id)}>
  {todo.text}
  </div>
  <div className="icons">
  <Delete onClick={() => removeTodo(todo.id)}
  className='delete-icon'
  />
  <Edit onClick={() => setEdit({id: todo.id,value: todo.text})}
  className='edit-icon' />
    </div>
    </div>
  ));
}
export default Todo;
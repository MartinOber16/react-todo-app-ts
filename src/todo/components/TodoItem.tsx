// import { useContext } from "react";
// import { TodoContext } from '../context/TodoContext';
import { Todo } from "../interfaces/interfaces"
import { useTodos } from '../hooks/useTodos';

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    // const { toogleTodo } = useContext( TodoContext );
    const { toogleTodo } = useTodos();

    // const handleDbClick = () => {
    //     toogleTodo( todo.id );
    // }

    return (
        <li 
            className="list-group-item"
            style={{
                cursor:'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
        >
            <input 
                className="form-check-input me-1" 
                type="checkbox" value="" 
                aria-label="..." 
                onChange={ () => toogleTodo( todo.id ) }
            /> 
            { todo.desc }
        </li>
    )
}

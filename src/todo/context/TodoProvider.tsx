import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
    todosCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false
        }
    ],
    completed: 0,
    pending: 2,
}

interface props {
    children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {

    const [ todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE );

    const toogleTodo = ( id: string ) => {
        dispatch({
            type: 'toogleTodo', payload: { id }
        });
    }

    return (
        <TodoContext.Provider value={{
            todoState, 
            toogleTodo,
        }}>
            { children }
        </TodoContext.Provider>
    )
}

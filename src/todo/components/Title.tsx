import { useTodos } from '../hooks/useTodos';

export const Title = () => {

    const { pendingTodos } = useTodos();

    return (
        <h1>
            Tareas: { pendingTodos }
        </h1>
    )
}

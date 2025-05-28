import React from 'react';
import type { Todo } from '../types/Todo';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <li
            onClick={() => toggleTodo(todo.id)}
            className={todo.completed ? 'completed' : ''}
        >
            {todo.text}
        </li>
    );
};

export default TodoItem;

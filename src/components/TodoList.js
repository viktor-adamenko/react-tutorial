import React from 'react';
import TodoItem from './TodoItem'
import todosData from '../data/todosData';

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }

                return todo;
            });

            return updatedTodos;
        });

    }

    render() {    

        const listItems = this.state.todos.map(i => { return <TodoItem key={i.id} item={i} handleChange={this.handleChange}/>});

        return (
            <div className="todo-list">
                {listItems}
            </div>
        );
    }
}

export default TodoList
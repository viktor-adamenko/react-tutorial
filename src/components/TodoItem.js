import React from 'react';

class TodoItem extends React.Component {
    
    constructor() {
        super();
        this.state = {
            completed: false
        };

        this.handleChange = this.handleChange.bind(this);      
    }

    handleChange() {
        this.setState(prev => {
            return {
                completed: !prev.completed
            }
        });
    }

    render() {  

        let sCompleted = this.state.completed;
        let iCompleted = this.props.item.completed;

        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={sCompleted != iCompleted} 
                    onChange={() => this.handleChange()}
                />
                <p className={sCompleted != iCompleted ? "line-throught" : ""}>{this.props.item.text}</p>
            </div>
        );
    }
}

export default TodoItem
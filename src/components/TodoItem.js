import React from 'react';

class TodoItem extends React.Component {
    
    render() {  
        
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.props.item.completed} 
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <p className={this.props.item.completed ? "line-throught" : ""}>{this.props.item.text}</p>
            </div>
        );
    }
}

export default TodoItem
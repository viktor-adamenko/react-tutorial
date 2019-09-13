import React from 'react';
import TodoList from './TodoList'

import '../css/main.css'

class App extends React.Component {

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );    
  }
}

export default App
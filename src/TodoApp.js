import React from 'react'
import './App.css'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Index from './components/pages/Index'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Profile from './components/pages/Profile'
import TodoTask from './components/TodoList/TodoTask'

function TodoApp(){
  return(
    <div className="App">
      <h1>Todo App</h1>
      {/* <Link to='/todo-task'>Todo Task</Link> */}
      <Switch>
        {/* <Route path='/' component={Index}/>
        <Route exact patch='/login' component={Login}/>
        <Route exact patch='/register' component={Register}/>
        <Route exact patch='/profile' component={Profile}/> */}

        <Route  path='/todo-task'>
          <TodoTask />
        </Route>
        {/* <Redirect to='/' /> */}

      </Switch>
    </div>
  )
}
export default TodoApp
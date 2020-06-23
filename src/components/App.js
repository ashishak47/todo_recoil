import React from 'react'
import { RecoilRoot } from "recoil";
import Footer from './Footer';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => (
  <RecoilRoot>
    <div className="todoapp">

      <header>
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <TodoList />
      </section>
      <Footer />
    </div>
  </RecoilRoot>
)

export default App

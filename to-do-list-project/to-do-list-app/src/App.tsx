
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {
  // const todos = [{id:'user1',todo: 'Learn React'}, {id:'user2', todo: 'Learn typescript'}];
  
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;

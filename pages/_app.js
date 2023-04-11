
import Todo from './components/Todo';

function MyApp() {
  return(
      <div className="myappDiv">
        <h1>My Todos</h1>
        <Todo text='Learn React' />
        <Todo text='Master React' />
        <Todo text='Explore the full React course' />
      </div>
    );
}

export default MyApp

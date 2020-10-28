import './App.css';
import DoneListContainer from './containers/DoneListContainer';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import TodoListContainer from './containers/TodoListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/done" component={DoneListContainer} />
            <Route path="/" component={TodoListContainer} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

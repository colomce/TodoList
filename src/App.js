import './App.css';
import DoneListContainer from './containers/DoneListContainer';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import TodoListContainer from './containers/TodoListContainer';
import logo from './images/leaf.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span style={{display: 'inline-block' }}>
          
          <h1 id="appName"><img src={logo} width="70"/>TodoList</h1>
        </span>

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

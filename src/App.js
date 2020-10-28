import './App.css';
import DoneListContainer from './containers/DoneListContainer';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import TodoListContainer from './containers/TodoListContainer';
import logo from './images/leaf.png';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <header className="App-header">
        <span style={{display: 'inline-block' }}>
          <h1 id="appName"><img src={logo} width="70" alt="logo" />TodoList</h1>
        </span>

        <Navigation />
        <Switch>
          <Route path="/done" component={DoneListContainer} />
          <Route path="/" component={TodoListContainer} />
        </Switch>

      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;

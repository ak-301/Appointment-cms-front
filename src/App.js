import './App.css';
import Home from './Home';
import OrdersPage from './OrdersPage';
import FormPage from './Form';
import {Switch, BrowserRouter, Route} from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/orders' component={OrdersPage}/>
        <Route path='/new-order' component={FormPage}/>
      </Switch>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
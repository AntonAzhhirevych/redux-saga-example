import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import './App.css';
import types from './redux/types';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-link-container">
          <p
            onClick={() => dispatch({ type: types.INCREMENT_START })}
            className="App-link"
          >
            Increment
          </p>
          <p
            onClick={() => dispatch({ type: types.DECREMENT_START })}
            className="App-link"
          >
            Decrement
          </p>

          <p
            onClick={() => dispatch({ type: types.ASYNC_START })}
            className="App-link"
          >
            Async
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Component2 } from './components/Component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Presiona el boton!</h1>
        <Component2/>
      </header>
    </div>
  );
}

export default App;

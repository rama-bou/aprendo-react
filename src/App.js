import logo from './logo.svg';
import './App.css';
import { Componente1 } from './components/Componente1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>App de React</h1>
        <Componente1/>
      </header>
    </div>
  );
}

export default App;

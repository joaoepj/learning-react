import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <MyComponent/>
      <MyComponent2(props: "color:red")/>  
      </header>
    </div>
  );
}

export default App;

function MyComponent() {
  return <h1>I am a component!</h1>
  
}

function MyComponent2({props}) {
  return <h1 style={{color: color}}>I am a component!</h1>
  
}
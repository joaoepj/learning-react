import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <MyComponent/>
      
      <MyComponent2 className="App-fs" param="blue"/>
      <MyComponent3 param="red"/>
      <MyComponent3 param="green"/>
      </header>
             
    </div>
  );
}

export default App;

function MyComponent() {
  return <h1>I am a component!</h1>
  
}

function MyComponent2({param}) {
  return <h2 style={{color: param}}>I am a component!</h2>
  
}

function MyComponent3({param}) {
  return <h1 onClick={() => alert("You clicked me!")} style={{color: param}}>I am a component!</h1>
  
}
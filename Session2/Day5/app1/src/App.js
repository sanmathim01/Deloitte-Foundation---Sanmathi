import logo from './logo.svg';
import './App.css';

function MyButton(){
  return(
    <button>Click Me!</button>
  )
}
function App() {
  return (
    <div><h1>Hello world!</h1><MyButton /></div>
  );
}

export default App;
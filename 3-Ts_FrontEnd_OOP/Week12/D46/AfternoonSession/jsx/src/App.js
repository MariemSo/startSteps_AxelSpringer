import './App.css';
import {Hello} from './Components/Hello';
import {HelloWithoutJSX} from './Components/HelloWithoutJSX';

function App() {
  return (
    <div className="App">
        <Hello />
        <HelloWithoutJSX />
    </div>
  );
}

export default App;

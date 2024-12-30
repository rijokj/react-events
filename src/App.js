import './App.css';
import Event3 from './components/events/onchange';
import Event1 from './components/events/onClick';
import Event2 from './components/events/onDoubleClick';

function App() {
  return (
    <div>
      <Event1 />
      <Event2 />
      <Event3 />
    </div>
  )
}

export default App;

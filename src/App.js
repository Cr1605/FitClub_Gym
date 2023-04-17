import './App.css';
import Home from './components/Home/Home';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';

function App() {
  return (
    <div className="App">
          <Home />
          <Programs/>
          <Reasons/>
          <Plans/>
    </div>
  );
}

export default App;

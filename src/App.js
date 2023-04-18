import './App.css';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
          <Home />
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
    </div>
  );
}

export default App;

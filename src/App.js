import './App.css';
import Footer from './components/Footer/Footer';
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
          <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Hero from './Components/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonial from './Components/Testimonials/Testimonial';
function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reasons />
         <Plans />
         <Testimonial />
    </div>
  );
}

export default App;

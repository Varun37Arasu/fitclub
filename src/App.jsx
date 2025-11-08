import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import FourWeekTransformation from './pages/programs/FourWeekTransformation';
import EightWeekTransformation from './pages/programs/EightWeekTransformation';
import NutritionPlan from './pages/programs/NutritionPlan';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/4-week-transformation" element={<FourWeekTransformation />} />
            <Route path="/services/8-week-transformation" element={<EightWeekTransformation />} />
            <Route path="/services/nutrition-plan" element={<NutritionPlan />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

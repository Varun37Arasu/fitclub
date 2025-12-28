import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import EightWeekTransformation from './pages/programs/EightWeekTransformation';
import TwelveWeekTransformation from './pages/programs/TwelveWeekTransformation';
import TwentyFourWeekTransformation from './pages/programs/TwentyFourWeekTransformation';
import AnnualTransformation from './pages/programs/AnnualTransformation';
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
            <Route path="/services/8-week-transformation" element={<EightWeekTransformation />} />
            <Route path="/services/12-week-transformation" element={<TwelveWeekTransformation />} />
            <Route path="/services/24-week-transformation" element={<TwentyFourWeekTransformation />} />
            <Route path="/services/annual-transformation" element={<AnnualTransformation />} />
            <Route path="/services/nutrition-diet-plans" element={<NutritionPlan />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

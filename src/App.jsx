import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Startup from './pages/Startup';
import Msme from './pages/MSME';
import FinancialQuizModal from './components/FinancialQuizModal';
import CalculatorGrid from './pages/Calculator';
import Sip from './pages/Sip';
import Swp from './pages/Swp';
import Mutual from './pages/Mutual';
import Ppf from './pages/Ppf';
import Epf from './pages/Epf';
import Fd from './pages/Fd';
import Emi from './pages/Emi';
import Cagr from './pages/Cagr';
import Gratuity from './pages/Gratuity';
import Hra from './pages/Hra';
import Nps from './pages/Nps';
import Simple from './pages/Simple';
import Compound from './pages/Compound';
import Retirement from './pages/Retirement';
import Gst from './pages/Gst';

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      
      {/* Page Content */}
      <div className="min-h-screen">
        <FinancialQuizModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/msme" element={<Msme />} />
          <Route path="/calculator" element={<CalculatorGrid/>} />
          <Route path="/sip" element={<Sip />} />
          <Route path="/swp" element={<Swp />} />
          <Route path="/mutual-fund" element={<Mutual />} />
          <Route path="/ppf" element={<Ppf />} />
          <Route path="/epf" element={<Epf />} />
          <Route path="/fd" element={<Fd />} />
          <Route path="/emi" element={<Emi />} />
          <Route path="/cagr" element={<Cagr />} />
          <Route path="/gratuity" element={<Gratuity />} />
          <Route path="/hra" element={<Hra />} />
          <Route path="/nps" element={<Nps />} />
          <Route path="/simple-interest" element={<Simple />} />
          <Route path="/compound-interest" element={<Compound />} />
          <Route path="/retirement" element={<Retirement />} />
          <Route path="/gst" element={<Gst />} />


        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;

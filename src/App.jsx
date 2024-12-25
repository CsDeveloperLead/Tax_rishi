import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Startup from "./pages/Startup";
import Msme from "./pages/Msme";
import FinancialQuizModal from "./components/FinancialQuizModal";
import CalculatorGrid from "./pages/Calculator";
import Sip from "./pages/Sip";
import Swp from "./pages/Swp";
import Mutual from "./pages/Mutual";
import Ppf from "./pages/Ppf";
import Epf from "./pages/Epf";
import Fd from "./pages/Fd";
import Emi from "./pages/Emi";
import Cagr from "./pages/Cagr";
import Gratuity from "./pages/Gratuity";
import Hra from "./pages/Hra";
import Nps from "./pages/Nps";
import Simple from "./pages/Simple";
import Compound from "./pages/Compound";
import Retirement from "./pages/Retirement";
import Gst from "./pages/Gst";
import MsmeRegistration from "./pages/MsmeRegistration";
import StartupBenefits from "./pages/StartupBenefits";
import MsmeDocument from "./pages/MsmeDocument";
import MsmeScheme from "./pages/MsmeScheme";
import MsmeGst from "./pages/MsmeGst";
import StartupRegistration from "./pages/StartupRegistration";
import StartupFunding from "./pages/StartupFunding";
import StartupTax from "./pages/StartupTax";
import IrrCalculator from "./pages/Irr";
import BlogPage from "./pages/Blogs";
import GstBasics from "./components/GstRishiComponent/GstBasics";
import GstRegistration from "./components/GstRishiComponent/GstRegistration";
import InputTaxCredits from "./components/GstRishiComponent/InputTaxCredits";
import GstInvoice from "./components/GstRishiComponent/GstInvoice";
import InvoicingGst from "./components/GstRishiComponent/InvoicingGst";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      {/* Page Content */}
      <div className="min-h-screen">
        <div className="">
          <FinancialQuizModal />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id?" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/msme" element={<Msme />} />
          <Route path="/calculator" element={<CalculatorGrid />} />
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
          <Route path="/irr" element={<IrrCalculator />} />
          <Route path="/msme/registration" element={<MsmeRegistration />} />
          <Route path="/msme/document" element={<MsmeDocument />} />
          <Route path="/msme/scheme" element={<MsmeScheme />} />
          <Route path="/msme/gst" element={<MsmeGst />} />

          <Route path="startup/benefits" element={<StartupBenefits />} />
          <Route path="startup/tax" element={<StartupTax />} />
          <Route
            path="startup/registration"
            element={<StartupRegistration />}
          />
          <Route path="startup/funding" element={<StartupFunding />} />

          <Route path="/gstrishi/gst-basics" element={<GstBasics />} />
          <Route path="/gstrishi/gst-registration" element={<GstRegistration />} />
          <Route path="/gstrishi/gst-input-tax-credit" element={<InputTaxCredits />} />
          <Route path="/gstrishi/gst-invoice" element={<GstInvoice />} />
          <Route path="/gstrishi/invoicing-gst" element={<InvoicingGst />} />
          
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;

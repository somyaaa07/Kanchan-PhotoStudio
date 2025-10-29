import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import ContactPage from "./components/contact/Contact";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChoose";
import AboutPage from "./components/about/About";

// Pages
import PortfolioPage from "./components/portfolio/PortfolioPage";
import ServicesPage from "./components/service/ServicesPage";

// Service Details
import BabyShoot from "./components/service/baby-shoot/baby-shoot";
import WeddingPhotography from "./components/service/wedding-shoot/wedding-shoot";
import PreWedding from "./components/service/prewedding-shoot/prewedding-shoot";
import EventPhotography from "./components/service/event-shoot/event-shoot";
import ProductPhotography from "./components/service/product-photography/product-photography";
import OutdoorPhotography from "./components/service/outdoor-shoot/outdoor-shoot";
import MaternityShoot from "./components/service/materinity-shoot/materinity-shoot";
import PhotoFraming from "./components/service/photo-framing/photoFraming";
import WeddingCinemo from "./components/service/wedding-cinemo/wedding-cinemo";
import Portrait from "./components/service/Portrait-shoot/Portrait";

// Gallery Component
import PhotoStudioWebsite from "./components/gallery/Gallery";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import VisualDiaryGallery from "./components/Gallery";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Welcome />
              <Services />
              <Stats />
              <VisualDiaryGallery /> {/* Gallery included */}
              <CTA />
              <Portfolio />
              <WhyChooseUs />
              <Testimonials />
            </>
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
                <Route path="/gallery" element={<PhotoStudioWebsite />} />

        <Route path="/privacy-polcy" element={<PrivacyPolicy />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/baby-shoot" element={<BabyShoot />} />
        <Route path="/services/wedding-photography" element={<WeddingPhotography />} />
        <Route path="/services/prewedding-shoot" element={<PreWedding />} />
        <Route path="/services/event-photography" element={<EventPhotography />} />
        <Route path="/services/product-photography" element={<ProductPhotography />} />
        <Route path="/services/outdoor-photography" element={<OutdoorPhotography />} />
        <Route path="/services/maternity-shoot" element={<MaternityShoot />} />
        <Route path="/services/portrait-shoot" element={<Portrait />} />
        <Route path="/services/photo-framing" element={<PhotoFraming />} />
        <Route path="/services/wedding-cinemo" element={<WeddingCinemo />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Company from './Sections/Company'
import Hero from './Sections/Hero'
import Mentor from './Sections/Mentor'
import OurFeatures from './Sections/OurFeatures'
import Trial from './Sections/Trial'
import Tutor from './Sections/Tutor'
import Package from './Sections/Package'
import Faqs from './Sections/Faqs'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[375px] w-full">
          <div className="px-4 py-5">
            <Header />
            <Hero />
          </div>
    
          <Mentor />
          <Company />
          <OurFeatures />
          <Trial />
          <Tutor />
          <Package />
          <Faqs />
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App

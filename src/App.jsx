import { useState } from 'react'
import MainLayout from './components/MainLayout'
import Header from './components/Header'
import SectionWrapper from './components/SectionWrapper'
import About from './Sections/About'
import HeroSection from './components/Hero.jsx'
import SkillsSection from './Sections/Skills.jsx'
// import './App.css'


function App() {

  return (
     <MainLayout>
      <Header/>
      <SectionWrapper id="about">
        <HeroSection/>
      </SectionWrapper>
      <SectionWrapper id="about">
         <About />
      </SectionWrapper>
      <SectionWrapper id="about">
         <SkillsSection/>
      </SectionWrapper>
     </MainLayout>
  )
}

export default App

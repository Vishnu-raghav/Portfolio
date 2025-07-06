import { useState } from 'react'
import MainLayout from './components/MainLayout'
import Header from './components/Header'
import SectionWrapper from './components/SectionWrapper'
import About from './Sections/About'
import HeroSection from './components/Hero.jsx'
import SkillsSection from './Sections/Skills.jsx'
import ProjectsSection from './Sections/Projects.jsx'
// import './App.css'
import Home from "./Sections/Home.jsx"


function App() {

  return (
     <MainLayout>
      <Header/>
      <SectionWrapper id="about">
       <Home/>
      </SectionWrapper>
      <SectionWrapper id="about">
         <About />
      </SectionWrapper>
      <SectionWrapper id="about">
         <SkillsSection/>
      </SectionWrapper>
      <SectionWrapper id="about">
         <ProjectsSection/>
      </SectionWrapper>
     </MainLayout>
  )
}

export default App

import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import MainLayout from './components/MainLayout';
import Header from './components/Header';
import SectionWrapper from './components/SectionWrapper';
import About from './Sections/About';
import SkillsSection from './Sections/Skills.jsx';
import ProjectsSection from './Sections/Projects.jsx';
import Home from "./Sections/Home.jsx";
import ContactSection from './Sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import BlogSection from './Sections/Blogs.jsx';
import BlogDetail from './pages/BlogDetail.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Header />
              <SectionWrapper id="home"><Home /></SectionWrapper>
              <SectionWrapper id="about"><About /></SectionWrapper>
              <SectionWrapper id="skills"><SkillsSection /></SectionWrapper>
              <SectionWrapper id="project"><ProjectsSection /></SectionWrapper>
              <SectionWrapper id="contact"><ContactSection /></SectionWrapper>
              <SectionWrapper id="blog"><BlogSection /></SectionWrapper>
              <Footer />
            </MainLayout>
          }
        />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

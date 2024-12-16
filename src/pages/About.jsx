import AboutSection1 from "../components/AboutComponents/AboutSection1";
import AboutSection2 from "../components/AboutComponents/AboutSection2";
 import Teams from "../components/AboutComponents/Teams";
 import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutSection1 />
      <AboutSection2 />
       <Teams />
      <TestimonialSection /> 
    </div>
  )
}

export default About

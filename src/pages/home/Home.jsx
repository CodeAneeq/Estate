import React from "react";
import BasicLayout from "../../components/layout/BasicLayout";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import TestimonialSection from "../../components/Testonimal/Testoniamal";
import Project from "../../components/project/Project";
import Contact from "../../components/contact/ContactForm";

const Home = () => {
  return (
    <div>
      <BasicLayout>
        <div>
          <Hero />
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Project/>
        </div>
        <div>
          <TestimonialSection/>
        </div>
        <div>
          <Contact/>
        </div>
      </BasicLayout>
    </div>
  );
};

export default Home;

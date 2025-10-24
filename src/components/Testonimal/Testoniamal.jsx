import React from "react";
import styles from "./TestimonialSection.module.scss";
import profile1 from "../../assets/profile_img_1.png";
import profile2 from "../../assets/profile_img_2.png";
import profile3 from "../../assets/profile_img_3.png";
import img from '../../assets/project_img_1.jpg'
import TestimonialCard from "../cards/TestonimalCard";
import ProjectCard from "../cards/ProjectCard";
import PropertyCard from "../cards/PropertyCard";

const testimonials = [
  {
    image: profile1,
    name: "Donald Jackman",
    designation: "Marketing Manager",
    review:
      "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    image: profile2,
    name: "Richard Nelson",
    designation: "UI/UX Designer",
    review:
      "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    image: profile3,
    name: "James Washington",
    designation: "Co-Founder",
    review:
      "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.heading}>
        <span>Customer</span> <span style={{fontWeight: '100', textDecoration: 'underline'}}>Testimonials</span> 
      </h2>
      <p className={styles.subheading}>
        Real Stories from Those Who Found Home with Us
      </p>
      <div className={styles.cardsContainer}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;

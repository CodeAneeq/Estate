import React from "react";
import styles from "./Project.module.scss";
import ProjectCard from "../cards/ProjectCard";
import project1 from '../../assets/project_img_1.jpg'
import project2 from '../../assets/project_img_2.jpg'
import project3 from '../../assets/project_img_3.jpg'
import project4 from '../../assets/project_img_4.jpg'
const Project = () => {
  return (
    <div className={`${styles.project_section}`}>
      <h2>
        <span>Projects</span>{" "}
        <span style={{ fontWeight: "100", textDecoration: "underline" }}>
          Completed
        </span>
      </h2>
      <p>
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>
      <div className={`${styles.projects_card}`}>
        <ProjectCard image={project1} title={'Skyline Haven'} price={'$2,50,000'} location={'California'}/>
        <ProjectCard image={project2} title={'Vista Verde'} price={'$2,50,000'} location={'San Francisco'}/>
        <ProjectCard image={project3} title={'Serenity Suites'} price={'$2,50,000'} location={'Chicago'}/>
        <ProjectCard image={project4} title={'Central Square'} price={'$2,50,000'} location={'Los Angeles'}/>
      </div>
    </div>
  );
};

export default Project;

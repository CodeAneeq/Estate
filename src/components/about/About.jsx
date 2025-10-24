// import React from 'react';
// import styles from './About.module.scss';
import aboutIMG from '../../assets/brand_img.png'

// const About = () => {
//   return (
//     <div className={styles.aboutContainer}>
//       <h2>About Our Brand</h2>
//       <p>Passionate About Properties, Dedicated to Your Vision</p>
//       <div className={styles.stats}>
//       <figure>
//         <img src={aboutIMG} alt="" />
//       </figure>
//       <div>
//         <div>
//         <div className={styles.stat}>
//           <h3>10+</h3>
//           <p>Years of Excellence</p>
        // </div>
//         <div className={styles.stat}>
//           <h3>12+</h3>
//           <p>Projects Completed</p>
//         </div>
//         </div>
//         <div>
//         <div className={styles.stat}>
//           <h3>20+</h3>
//           <p>Mn. Sq. Ft. Delivered</p>
//         </div>
//         <div className={styles.stat}>
//           <h3>25+</h3>
//           <p>Ongoing Projects</p>
//         </div>
//       </div>
//       </div>
//         </div>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//       </p>
//       <button className={styles.learnMore}>Learn more</button>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import styles from './about.module.scss';
import PrimaryBtn from '../btns/primaryBtn';
// import brandImage from './path/to/your/image.jpg'; // Update the path to your image

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2><span>About </span><span style={{fontWeight: '100', textDecoration: 'underline'}}>Our Brand</span></h2>
      <p>Passionate About Properties, Dedicated to Your Vision</p>
      <div className={`${styles.section}`}>
      <img src={aboutIMG} alt="Brand" className={styles.brandImage} />
      <div className={styles.stats}>
        <div className={`${styles.one}`}>
        <div className={styles.stat}>
          <h3>10+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className={styles.stat}>
          <h3>12+</h3>
          <p>Projects Completed</p>
        </div>
        </div>
        <div className={`${styles.two}`}>
        <div className={styles.stat}>
          <h3>20+</h3>
          <p>Mn. Sq. Ft. Delivered</p>
        </div>
        <div className={styles.stat}>
          <h3>25+</h3>
          <p>Ongoing Projects</p>
        </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <p className={`${styles.p}`} style={{width: '470px', textAlign: 'start', marginLeft: '20px'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <PrimaryBtn style={{marginTop: '20px', marginLeft: '20px', backgroundColor: '#2563EB', width: '130px', height: '40px', borderRadius: '5px', color: 'white'}} txt={"Learn More"}/>
        </div>
      </div>
      </div>
      {/* <button className={styles.learnMore}>Learn more</button> */}
    </div>
  );
};

export default About;
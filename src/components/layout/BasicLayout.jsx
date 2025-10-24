import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer';


const BasicLayout = ({ children }) => {
  // const [showLogin, setIsLogin] = useState(false);
  // const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* {
        visible ? showLogin ? <Login setIsLogin={setIsLogin} showLogin={showLogin} setVisible={setVisible}></Login> : <SignUp setIsLogin={setIsLogin} showLogin={showLogin} setVisible={setVisible}/>  : <></>
      } */}
      {/* <Sidebar /> */}
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default BasicLayout;

import React from 'react';
import Navbar from "./Navbar.tsx";

const Home = () => {
  return (
    <>
      <Navbar onToggleSidebar={undefined}/>
      <div className="items-center">
        Home page contents added here
      </div>
    </>
  )
};
export default Home;


export const About = () => {
  return (
    <div>
      <Navbar onToggleSidebar={undefined}/>
      <h1>About Contents Here</h1>
    </div>
  );
}

export const Services = () => {
  return (
    <div>
      <Navbar onToggleSidebar={undefined}/>
      <h1>Services Contents Here</h1>
    </div>
  );
}

export const Contact = () => {
  return (
    <div>
      <Navbar onToggleSidebar={undefined}/>
      <h1>Contact Contents Here</h1>
    </div>
  );
}
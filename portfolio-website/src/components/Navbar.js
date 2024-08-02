import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 flex justify-between">
      <div className="text-xl font-bold">My Portfolio</div>
      <ul className="flex space-x-4">
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#education">My Education</a></li>
        <li><a href="#achievements">My Achievements</a></li>
        <li><a href="#interests">What I'm Interested In</a></li>
        <li><a href="#cv">My CV</a></li>
        <li><a href="#experience">My Experience</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

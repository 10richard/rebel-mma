import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div>Logo</div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/programs">Programs</a>
        </li>
        <li>
          <a href="/schedule">Schedule</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

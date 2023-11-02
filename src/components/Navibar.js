import React, {useState} from 'react';

const Navibar = () => {
  const location = window.location.pathname;
  const [isAboutPage, setAboutPage] = useState(location === "/");

  return (
    <nav className="navbar">
      <div className="links">
        <a className={isAboutPage?"isSelected":""} 
          href="/"
            onClick={() => setAboutPage(true)}
        >
            About Me
        </a>
        <a className={isAboutPage?"":"isSelected"} 
          href="/mytown"
          onClick={() => setAboutPage(false)}
        >
            My Town
        </a>
      </div>
      <div className="brand">Sudeep Raj Badal</div>
    </nav> 
  );
};

export default Navibar;

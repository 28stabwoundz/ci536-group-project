import React from 'react';

const Header = () => {
  return (
    <header className="alcatraz-header">
      <div className="alcatraz-header_content">
        <div className="alcatraz-header_logo">
          <a href="/">
            <h1>ALCATRAZ INC</h1>
          </a>
        </div>
        <nav>
          <ul className="alcatraz-header_nav-list">
            <li><button>Roles at Alcatraz</button></li>
            <li><button>Login/Sign in</button></li>
            <li><button>About Alcatraz Inc.</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
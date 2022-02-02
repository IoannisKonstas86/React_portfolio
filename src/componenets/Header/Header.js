import React from 'react';

import classes from "./Header.vas.scss"

const Header = () => {
  return <header className={classes.header}>
      <div className={classes.header__content}>
          <h2>Navbar</h2>
      </div>
      <nav className={classes.header__content__nav}>
          <ul>
              <li>
                  <a href='/'>pageone</a>
              </li>
              <li>
                  <a href='/'>page2</a>
              </li>
              <li>
                  <a href='/'>page3</a>
              </li>
          </ul>
          <button>CTA</button>
      </nav>
  </header>

  
};

export default Header;

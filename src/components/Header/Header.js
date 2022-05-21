import React, {useState} from 'react';
import './Header.scss';
import {Close, MenuOutlined} from '@mui/icons-material';

const Header = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  }
  function handlePortfolioClick () {
    document.getElementById("Works").scrollIntoView({behavior: "smooth"});
    setActive(false);
  }
  function handleContactClick () {
    document.getElementById("ContactForm").scrollIntoView({behavior: "smooth"});
    setActive(false);
  }
  function handleHomeClick () {
    setActive(false);
  }
  return (
    <div className="Header" id="Header">
    <div className="header-logo">
      <h1>Alan</h1>
    </div>
    <nav className={active ? 'navbar-active' : 'navbar'}>
    <ul>
        <div className="closed">
          <Close className="close" onClick={showMenu} />
        </div>
        <li><div onClick={handleHomeClick}>Home</div></li>
          <li><div onClick={handleHomeClick}>About</div></li>
          <li><div onClick={handlePortfolioClick}>Portfolio</div></li>
          <li><div><a href="https://github.com/OldEphraim" target="_blank" rel="noreferrer">GitHub</a></div></li>
          <li><div><a href="https://oldephraimlearnstocode.wordpress.com" target="_blank" rel="noreferrer">Blog</a></div></li>
          <li><div onClick={handleContactClick}>Contact</div></li>
      </ul>
    </nav>
    <div className="changer">
    <MenuOutlined className={active ? 'menu-inactive' : 'menu'} onClick={showMenu}/>
    </div>
    </div>
  )
}

export default Header;

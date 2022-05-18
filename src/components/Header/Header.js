import React, {useState} from 'react';
import './Header.scss';
import {Close, MenuOutlined} from '@mui/icons-material';

const Header = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  }
  function handleClick () {
    document.getElementById("Works").scrollIntoView({behavior: "smooth"});
    setActive(false);
  }
  return (
    <div className="Header">
    <div className="header-logo">
      <h1>Alan</h1>
    </div>
    <nav className={active ? 'navbar-active' : 'navbar'}>
      <ul>
        <div className="closed">
          <Close className="close" onClick={showMenu} />
        </div>
        <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><div onClick={handleClick}>Portfolio</div></li>
          <li><a href="https://github.com/OldEphraim" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://oldephraimlearnstocode.wordpress.com" target="_blank" rel="noreferrer">Blog</a></li>
          <li><a href="https://oldephraimlearnstocode.wordpress.com/contact/" target="_blank" rel="noreferrer">Contact</a></li>
      </ul>
    </nav>
    <div className="changer">
    <MenuOutlined className={active ? 'menu-inactive' : 'menu'} onClick={showMenu}/>
    </div>
    </div>
  )
}

export default Header;

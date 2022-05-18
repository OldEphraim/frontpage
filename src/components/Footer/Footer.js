import React, {useState} from 'react';
import './Footer.scss';
import {Close, MenuOutlined} from '@mui/icons-material';
import {Link} from 'react-router-dom';

const Footer = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  }
  function handleClick () {
    document.getElementById("Works").scrollIntoView({behavior: "smooth"});
    setActive(false);
  }
  function handleAboutClick () {
    document.getElementById("Main").scrollIntoView({behavior: "smooth"});
  }
  return (
    <div className="Footer">
    <div className="footer-logo">
      <h1>Alan</h1>
    </div>
    <nav className={active ? 'navbar-active' : 'navbar'}>
      <ul>
        <div className="closed">
          <Close className="close" onClick={showMenu} />
        </div>
        <li><Link to="/">Home</Link></li>
          <li><a onClick={handleAboutClick}>About</a></li>
          <li><a onClick={handleClick}>Portfolio</a></li>
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

export default Footer;

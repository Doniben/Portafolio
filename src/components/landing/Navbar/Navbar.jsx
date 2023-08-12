import dochjaLogo from '../../../assets/img/dochja-logo.png'

export const Navbar = () => {
  return (
    <div className="top_menu">
      <div className="center">
        <figure className="logo">
          <a href="#" title="logo">
            <img src={ dochjaLogo } alt="logo" />
          </a>
        </figure>
        <nav className="menu">
          <ul>
            <li>
              <a href="#" title="Home" className="menu_list">
                Home
              </a>
            </li>
            <li>
              <a href="#about" title="About" className="menu_list">
                About Me
              </a>
            </li>
            <li>
              <a href="#education" title="Education" className="menu_list">
                Education
              </a>
            </li>
            <li>
              <a
                href="#experience"
                title="Work Experience"
                className="menu_list"
              >
                Work Experience
              </a>
            </li>
            <li>
              <a href="#portfolio" title="Portfolio" className="menu_list">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" title="Contact" className="menu_list">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="mob_menu_btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

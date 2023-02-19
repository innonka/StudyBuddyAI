import {NavLink} from 'react-router-dom';

function Header() {
    return (
      <header>
        <h3>LOGO</h3>

        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>
        </nav>
        
      </header>
    );
  }
  
  export default Header;
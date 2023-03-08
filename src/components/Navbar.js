import './Navbar.css'
import { FiMenu, Fix } from 'react-icons/fi'


const Navbar = ({navbarLinks}) => {
  return (
    <nav className='navbar'>
        <span className='navbar-logo'>EngenderHealth</span>
        <ul className='navbar-list'>
          {navbarLinks.map((item) => {
            return (
              <li className='navbar-item' key={item.title}>
                <a className='navbar-link' href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
    </nav>
      
  )
}

export default Navbar
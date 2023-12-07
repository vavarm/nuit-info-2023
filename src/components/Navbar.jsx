import { NavLink } from 'react-router-dom'
import navbarStyles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/articles'>Articles</NavLink>
    </nav>
  )
}

export default Navbar

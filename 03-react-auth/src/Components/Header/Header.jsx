import './header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const linkIsActive = (isActive) => {
    if (isActive) {
      return 'header__item-link--is-active'
    } else {
      return 'header__item-link'
    }
    // isActive ? 'header__item-link--is-active' : 'header__item-link'
  }
  // Aplicando BEM en classNames de React
  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>Logo</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header

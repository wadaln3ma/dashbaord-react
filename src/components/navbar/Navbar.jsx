import './Navbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

import logo from '../../images/logo.svg'

const Navbar = ()=>{
  return(
    <nav className="top-nav">
    <div className="nav-wrapper">
      <div className="nav-left">
        <span className="logo"
        >
        Dashboard
        </span>
      </div>
      
      <div className="nav-right">
        <div className="icons-container">
          <NotificationsNone />
          <span className="icon-badge">2</span>
        </div>
        <div className="icons-container">
          <Language />
          <span className="icon-badge">2</span>
        </div>
        <div className="icons-container">
          <Settings />
        </div>
        <img src={ logo }
        alt="avatar"
        className="avatar" />
      </div>
    </div>
    </nav>
)}
  

export default Navbar

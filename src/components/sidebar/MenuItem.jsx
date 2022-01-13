
const MenuItem = ({title, Icon, isActive})=>{
  const x = (isActive) ? " active" : ""
  const menuItemClass = "sidebar-list-item" + x
  return(
      <li className={menuItemClass}>
        <Icon className="sidebar-icon"/>
          {title}
      </li>
)}

export default MenuItem
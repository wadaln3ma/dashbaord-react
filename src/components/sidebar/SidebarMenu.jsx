import MenuItem from './MenuItem'
//const items = ["A", "B"]
const SidebarMenu = ({menuTitle, items
                     })=>{
  return (
    <div className="sidebar-menu">
        <h3 className="sidebar-title">
          {menuTitle}
        </h3>
        <ul className="sidebar-list">
            {
              items.map((item,index)=>(
              <MenuItem title={item.title}
                        Icon={item.Icon}
                        isActive={item.isActive}/>
          ))}
        </ul>
      </div>
    )
}

export default SidebarMenu

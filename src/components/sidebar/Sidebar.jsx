import './sidebar.css'
import SidebarMenu from './SidebarMenu'

import {LineStyle,
        TrendingUp,
        Timeline,
        WorkOutline,
        Report,
        BarChart,
        MailOutline,
        PermIdentity,
        Storefront,
        DynamicFeed,
        AttachMoney,
        ChatBubbleOutline,
} from '@material-ui/icons'

const Sidebar = ()=>{
  return(
  <div className="sidebar-container">
    <div className="sidebar-wrapper">
    
      <SidebarMenu menuTitle="Dashboard"
        items={[
          {title: "Home", Icon: LineStyle,
            isActive : true
          },
          {title: "Analytics", Icon: Timeline},
          {title:"Sales", Icon: TrendingUp},
        ]}
        />
    
      <SidebarMenu menuTitle="Quick Memu"
        items={[{title: "Users", Icon: PermIdentity},
        {title: "Products", Icon: Storefront},
        {title:"Transactions", Icon: AttachMoney},
        {title:"Reports", Icon: BarChart}]}
      />
      
      <SidebarMenu menuTitle="Notifications"
        items={[{title: "Email", Icon: MailOutline},
        {title: "Feedback", Icon: DynamicFeed},
        {title:"Messages", Icon: ChatBubbleOutline}]}
      />
      
      <SidebarMenu menuTitle="Staff"
        items={[{title: "Manage", Icon: WorkOutline},
        {title: "Analytics", Icon: Timeline},
        {title:"Reports", Icon: Report}]}
      />
      
    </div>
  </div>
)}

export default Sidebar
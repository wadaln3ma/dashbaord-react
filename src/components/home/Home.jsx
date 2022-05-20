import FeaturedInfo from './featuredInfo/FeaturedInfo.jsx'
import Chart from '../chart/Chart'
import { userData } from './data'
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"


const Home = ()=>{
  return (
    <div className="main-content">
      <FeaturedInfo />

      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>

      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
      
    </div>
)}

export default Home

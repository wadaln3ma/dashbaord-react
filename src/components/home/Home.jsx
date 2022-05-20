import FeaturedInfo from './featuredInfo/FeaturedInfo.jsx'
import Chart from '../chart/Chart'
import { userData } from './data'

const Home = ()=>{
  return (
    <div className="main-content">
      <FeaturedInfo />

      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>

      
    </div>
)}

export default Home

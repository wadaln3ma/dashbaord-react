import './App.css';
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'


function App() {
  return (
    <div className="App">
        <Navbar />
      <main>
        <div className="container">
          <Sidebar />
          <Home /> 
        </div>
      </main>
    </div>
  );
}

export default App;

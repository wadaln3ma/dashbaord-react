import './App.css';
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'


function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className="container">
          <aside>
            <div className="side-left">
              <Sidebar />
            </div>
         </aside>
         <div className="main-content">
          
         </div>
        </div>
      </main>
    </div>
  );
}

export default App;

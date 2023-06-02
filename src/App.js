import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      
      <Catalog></Catalog>
      <br/ >
    
      <div className='center-divider'>DIY Videos</div> 
      <br />  
      <div className='diyvideos'>
      <video src="./videos/homegarden.mp4" width="400" height="300" controls="controls" />
      
      <video src="./videos/GEElectricRangeInstallation.mp4" width="400" height="300" controls="controls"  />
      
      <video src="./videos/pouringslab.mp4" width="400" height="300" controls="controls"  />
      </div>
    
      <Footer></Footer>
    </div>
  );
}

export default App;

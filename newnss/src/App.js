
import './App.css';
import NavBar from './components/navbar';
import Footer from './Footer';
import Activities from './components/activities';

function App() {
  return (
    <>
     <div >
    <NavBar></NavBar>
    <Activities>  </Activities>
    <Footer></Footer>
    </div>
   
    {/* <div style={{height:'1000px'}} ></div> */}
    </>
   
  );
}

export default App;

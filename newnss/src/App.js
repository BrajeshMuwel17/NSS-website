
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/Footer';
import Activities from './components/activities';
import Profile from './components/Profile';

function App() {
  return (
    <>
     <div >
    <NavBar></NavBar>
    <Activities>  </Activities>
    <Profile>  </Profile>
    <Footer></Footer>
    </div>
   
    {/* <div style={{height:'1000px'}} ></div> */}
    </>
   
  );
}

export default App;

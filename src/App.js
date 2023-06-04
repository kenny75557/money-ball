import logo from './logo.svg';
import Heading from './components/Heading';
import Cate_select from './components/Cate_select';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';



function App() { 
  return ( 
    <div className="App"> 
      <Navbar/>
      {/* <Heading />   */}
      <Cate_select/>
      <Footer/>
    </div> 
  ); 
} 

export default App;

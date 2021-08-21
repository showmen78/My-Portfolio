import "../mobile.css";
import "../desktop.css";
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import {useState,useEffect} from "react";
function Navbar(){
  const [isDesktop, setDesktop] = useState(window.innerWidth > 750);
  const [pressed,setPressed]= useState(false);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 750);
  };
      
     useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

    function menuClicked(){
      setPressed(!pressed);
    }
 
    return  <div className="navbar">
     <div  className="left-child"> <h1> Showmen</h1></div>

     { (isDesktop)?<div className="right-child">
     
      <h6 className="button"> <a href="#Home">Home </a></h6>
      <h6 className="button"> <a href="#Services">Services </a></h6>
      <h6 className="button"><a href="#About">About Me </a> </h6>
      <h6 className="button">  <a href="#Hire">Hire Me! </a></h6>
    </div>: <div className="right-child" onClick={menuClicked}>{(!pressed)?<MenuIcon />:
    
    
    <div className="mobile-right-child">
      <CancelIcon/>
      <h6 className="button"> <a href="#Home">Home </a></h6>
      <h6 className="button"> <a href="#Services">Services </a></h6>
      <h6 className="button"><a href="#About">About Me </a> </h6>
      <h6 className="button">  <a href="#Hire">Hire Me! </a></h6>
      </div>}
    
    
    
    </div>}

    </div>
}

export default Navbar;
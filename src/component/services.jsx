

import "../mobile.css";
import "../desktop.css";
// import {services} from "../script"
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
function Services(){


  return <div className="services" id ="Services">
     <div className="card">
       <div >
         <CodeIcon fontSize="large"/>
         <h5> FRONT-END <span className="development">DEVELOPMENT</span></h5>
       </div>
       <div>


      <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
      <p className="card-highlight"> Language I Speak</p>
      
      <p> HTML, CSS , JAVA SCRIPT   </p>

      <p className="card-highlight"> DEV TOOLS</p>
      
      <p>VISUAL STUDIO CODE</p> 
      <p> BOOTSTRAP</p> 
      <p>REACT</p> 
      <p>GITHUB</p> 
      <p>TERMINAL</p> 
       
      
     


   
       </div>
     </div>

     <div className="card">
     <div className="card-title">
       <WebIcon fontSize="large"/>
         <h5> BACK-END <span className="development">DEVELOPMENT</span></h5>
       </div>
       <div>
     <p>I like to write the logics behind the scene from scratch</p>
      <p className="card-highlight">I Use</p>

      <p>Node js</p> 
      <p> Java Script</p> 
      <p>Express</p> 
      <p>MongoDB</p> 
     

       </div>
      
     </div>
    
    </div>

}
export default Services;
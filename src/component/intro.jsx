import "../desktop.css";
import "../mobile.css";
import Typical from 'react-typical'
import Particles from "./particles"
import Forest from "../video/Forest.mp4";
function Intro(){

    return <div className="intro" id="Home">
       {/* <Particles/> */}
       <video className="intro-bg-video"   loop autoPlay muted> <source src={Forest} type="video/mp4"/></video>   
      <div className="introduction">
         
          <h1> Hi  <br/>I am Showmen Dey</h1>
          <h3>
          <Typical
        steps={['Web Designer', 2000, 'Web Developer', 2000, "Freelancer",2000]}
        loop={Infinity}
        // wrapper=""
      />
        </h3>
      </div>
    </div>
}
export default Intro;
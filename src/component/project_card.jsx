
import "../desktop.css";
import "../mobile.css";

function Card(props) {
   function OpenUrl(){
    window.open(props.url,"_blank");
   }
   
    return (
      <div className="project-card">
        <img className="project-card-image" src={props.image}
        alt="profile"/>
        <button className="visit-button" onClick={OpenUrl}> Visit site</button>
      </div>
    );
  }
  
  export default Card;
  
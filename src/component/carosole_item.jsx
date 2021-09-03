
import "../mobile.css"
import "../desktop.css"
function CarosoleItem(props){
   
  return <div className="testimonials">
    
    <img
    src= {props.image}
    alt="client "
    />
    <div className="testimonial-description">
        <h2> {props.name}</h2>
        <p> {props.message} </p>
         
        
    </div>
    
    </div> 
}

export default CarosoleItem;
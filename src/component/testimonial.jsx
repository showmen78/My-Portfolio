import "../mobile.css"
import "../desktop.css"
import Carousel from "react-bootstrap/Carousel";
import CarosoleItem from "./carosole_item";
import RainVideo from "../video/rain.mp4";
import {testimonials} from "../script";
function Testimonials(){

    return    <div className="testimonial-class" >
        <video className="testimonial-bg-video"   loop autoPlay muted> <source src={RainVideo} type="video/mp4"/></video> 
    <Carousel className="carosole">
          
    <Carousel.Item interval={2000}>
        <CarosoleItem
        name={testimonials[0].name}
        image={testimonials[0].image}
        message={testimonials[0].message}
        />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <CarosoleItem
        name={testimonials[1].name}
        image={testimonials[1].image}
        message={testimonials[1].message}
        />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <CarosoleItem
        name={testimonials[2].name}
        image={testimonials[2].image}
        message={testimonials[2].message}
        />
    </Carousel.Item>
  </Carousel>
  </div>

}

export default Testimonials;

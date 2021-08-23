import "../mobile.css"
import "../desktop.css"
import Carousel from "react-bootstrap/Carousel";
import CarosoleItem from "./carosole_item";
import RainVideo from "../video/rain.mp4";
function Testimonials(){

    return    <div className="testimonial-class" >
        <video className="testimonial-bg-video"   loop autoPlay muted> <source src={RainVideo} type="video/mp4"/></video> 
    <Carousel className="carosole">
          
    <Carousel.Item interval={2000}>
        <CarosoleItem
        image={"https://static.remove.bg/remove-bg-web/417fd4161b5795da2323e66af38c4afd2f7ee3ae/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"}
        />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <CarosoleItem
        image={"https://static.remove.bg/remove-bg-web/417fd4161b5795da2323e66af38c4afd2f7ee3ae/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"}
        />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <CarosoleItem
        image={"https://static.remove.bg/remove-bg-web/417fd4161b5795da2323e66af38c4afd2f7ee3ae/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png"}
        />
    </Carousel.Item>
  </Carousel>
  </div>

}

export default Testimonials;

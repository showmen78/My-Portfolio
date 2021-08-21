import "../mobile.css";
import "../desktop.css";
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap"
import emailjs from 'emailjs-com';
import {useState , useEffect} from "react";
function Contact(){

  const [isDesktop, setDesktop] = useState(window.innerWidth > 750);
 
  const updateMedia = () => {
    setDesktop(window.innerWidth > 750);
  };
      
     useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });



  // *************************************************
   function sendMail(e){
    e.preventDefault();
    console.log(e.target);
    // emailjs.sendForm('newgmail', 'portfolio@template', e.target, 'user_z4JfQBxPJHa2Em3sKbaPh')
    emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_MAILTEMPLATE, e.target, process.env.REACT_APP_USERID)
      
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
   }

    return <div id="Hire">

    <Form  onSubmit={sendMail}>
      <div className="contact">
   <div className ="left-form" >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email"/>
    <Form.Text className="text-muted">
     <p>We'll never share your email with anyone else.</p> 
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Name</Form.Label>
    <Form.Control type="text" placeholder="Your Name" name="from_name"/>
  </Form.Group>

 {(isDesktop)&& <Button variant="primary" type="submit">
    BOOM!   
  </Button>}
 </div>


<div className="right-form">
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message !</Form.Label>
    <Form.Control as="textarea" rows={5} name="message"/>
  </Form.Group>
  {(!isDesktop)&&<Button className="mobile-btn" variant="primary" type="submit">
    BOOM!   
  </Button>}
 
</div></div>  </Form>


    </div>
}

export default Contact;
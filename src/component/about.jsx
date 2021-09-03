import { useState, useEffect} from "react";

import "../mobile.css";
import "../desktop.css";
import axios from "axios";
// import {apiUrl} from "../script";
// import profilePic from "../profile.jpg"


function About(){
    const apiUrl = process.env.REACT_APP_APIURL;
    const [aboutMe, setAboutMe]= useState("");
    const [profilePic, setProfilePic]= useState("");

    useEffect(()=>{
        axios.get(apiUrl+"/about").then(res=>{
            const data= res.data.body;
             setAboutMe(data);
        });

        axios.get(apiUrl+"/public/image/profile_pic").then(res=>{
            const data= res.data;
            setProfilePic(data);
        });

    },[]);


    return <div className="about" id="About">
         <div className="image">
           <img  src={apiUrl+"/image/profile_pic/"+String(profilePic)} alt="profile"/>
          
         </div>
         <div className="name">
             <h1>  I am   <br/> Showmen Dey </h1>
         </div>
        
         <div className="about-text">
             <p> {aboutMe}  </p>
             
         </div>
    </div>
}

export default About;
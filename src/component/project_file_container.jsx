import "../desktop.css";
import "../mobile.css";
import Projectcard from "./project_card";


import axios from "axios";
import {useState, useEffect} from "react";
// import {apiUrl} from "../script";

function ProjectCardContainer(){
    const [projectList,setProjectList]= useState([]);
    const apiUrl = process.env.REACT_APP_APIURL;
    useEffect(()=>{
        axios.get(apiUrl+"/public/image/project_pic").then(res=>{
            const data= res.data;
            setProjectList(data);
     
         });

    },[]);


    function CreateCard(pic){
        return <Projectcard 
        image={apiUrl+"/image/project_pic/"+ String(pic.name)} 
        url= {pic.link}
        
        />
    }



    return <div className="project-container">
        <h3>SOME OF MY WORKS</h3>
        <div className="project-card-container">
        
        {projectList.map(CreateCard)}
      
     
          
      



        
    </div>
    </div>
}
export default ProjectCardContainer;
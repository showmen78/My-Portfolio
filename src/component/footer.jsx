import "../mobile.css";
import "../desktop.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer(){
    const date= new Date().getFullYear();
    return <div className="footer">
        <div className="footer-link">
             <a href="www.facebook.com">    <FacebookIcon  fontSize="large"/>     </a>
               
            <a href="www.twitter.com"> 
                <TwitterIcon fontSize="large"/>
            </a>
            <a href="www.linkedin.com">
                <LinkedInIcon fontSize="large"/>
             </a>

        </div>
    <p > copyright {date} </p>
    </div>
}

export default Footer;
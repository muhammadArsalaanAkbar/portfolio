 
 import "./footer.css" 
 import { IoLogoWhatsapp } from "react-icons/io";
 import { FaFacebook } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa6";
 import { SiGmail } from "react-icons/si";

 function Footer(){
    return(
<main>
    <div className="foot-one ">
        <div className="foo-one">
     © Copyright Portfolio All Rights Reserve <br /><br />
      <a href="/" target="_blank" className="foot-2">DesignBy IQRA AWAN</a> 
     <br /> <br /><span className="last">
    <a href="https://web.whatsapp.com/"target="_blank" className="icone"><IoLogoWhatsapp />
    </a>
    <a href="https://www.facebook.com/" target="_blank" className="icone" ><FaFacebook />
    </a>
    <a href="https://www.linkedin.com/feed/" target="_blank" className="icone"><FaLinkedin />
    </a>
    <a href="https://mail.google.com/mail/u/0/#inbox"target="_blank" className="icone"><SiGmail />

    </a>
    </span>

     </div>
     

    
    </div>
</main>
    )
}
export default Footer
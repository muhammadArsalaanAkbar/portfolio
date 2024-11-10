import "./header.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { RiProfileFill } from "react-icons/ri";
import Link from "next/link";





function Header(){
    return(
<main className="main">
<div className="main-1">
    <div className="div-1">
        <img src="ARSAL.jpg" alt="its a picture" className="pic" />
        <p className="name"> Muhammad Arsalan Akbar </p>
      
        
       <ul className="icone">
       <li> <Link href="https://github.com/muhammadArsalaanAkbar" target="_blank"><FaFacebook className="face"/></Link></li>
     <li> <Link href="https://www.linkedin.com/in/malak-arsalan-4942a429b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target="_blank" ><FaLinkedinIn className="face"/></Link></li>
      <Link href="https://www.instagram.com/" target="_blank"> <li> <FaInstagramSquare className="face"/></li></Link>
       <Link href="https://github.com/muhammadArsalaanAkbar" target="_blank"> <li><FaGithub className="face"/></li></Link>
</ul>


        
    </div>
    <div className="div-2">
        
        <ul className="class">

         <Link href="/" className="icone-1"><li><FaHome /> Home</li></Link>
         <Link href="./about" className="icone-1">  <li><MdAccountCircle /> About</li></Link>
          <Link href="./project" className="icone-1" > <li> <RiProfileFill /> Portfolio</li></Link>
           <Link href="./contact"className="icone-1" > <li><IoMdContacts /> contact</li></Link>

        </ul>
    </div>
</div>
</main>
    )
}
export default Header
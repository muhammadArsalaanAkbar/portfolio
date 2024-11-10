import "./contact.css"
import Header_two from "../components/header-1"
import Link from "next/link"
import Button from "./button"
import Footer from "../components/footer"
function Contact(){
    return(
        <main>
            <Header_two/>
            <img src="https://img.freepik.com/premium-photo/abstract-geometric-background-with-blue-white-colors-design-technology-business-modern-presentation_1305385-70778.jpg" alt="its a background image" className="cont-img" />
        <div className="one">
<div className="cont-heading">
    <h1>
        Contact
    </h1>
    <p>
    I'M excited to collaborate with you! wheather you have a project in
            mind , want to discuss web development solutions,any accounting and
            managnment problems or just want to say Hello, you May , I'M here to
            listen.
    </p>

</div>
<div className="contact">
    <div className="cont">
        <ul className="cont-ul">
<li className="cont-li">phone: <a href="" className="cont-a"> 03352752054</a></li>
<li className="cont-li">Email: <a href="" className="cont-a"> arsalaanawan1339@gmail.com</a></li>
<li className="cont-li">Github: <a href="" className="cont-a"> arsalaanawan1339@gmail.com</a></li>
<li className="cont-li">LinkedIn: <a href="" className="cont-a"> arsalaanawan1339@gmail.com</a></li>
<li className="cont-li">Location: <a href="" className="cont-a"> Karachi, Pakistan</a></li><br /><br />
<iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1729687023809!5m2!1sen!2s"
                  width="300"
                  height="250"
                  style={{ border: 0 }}
                  className=" frame"
                ></iframe>

        </ul>
        </div>
        <div className="form">
            <div className=" form-item">
            <form >

            <p className="cont-p">Name</p>
            <input type="text" placeholder="" className="place" />
            <p className="para-2 ">Email</p>
            <input type="text" placeholder="" className="place-2" />
            <p className="mess">Message</p>
            <input  type="text" placeholder="" className=" mess-place" />

            <Link href=" "><Button text="SEND "/></Link>

            
            </form>
            
</div>
        </div>



















</div>











        </div>
        <Footer/>

        </main>
    )
}
export default Contact
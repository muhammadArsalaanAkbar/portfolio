import "./about.css"
import Link from "next/link"
import Header from "../components/header"
function Home(){ 
  return( 
    <main className="main-one">
      <Header/>
      <div className="one">
<div className="div-two">
  <img src=" https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?cs=srgb&dl=pexels-juanpphotoandvideo-1242348.jpg&fm=jpg" alt="" className="picture" />
 <h1 className="intro-abo">  About   </h1>
  <p className="para">

  "         As a multifaceted web developer, I seamlessly merge commerce
            expertise with technical prowess, leveraging HTML, CSS, JavaScript,
            React, and Node.js to craft intuitive, data-driven web applications.
            With a Master's in Commerce, I bring a unique understanding of
            business needs, driving solutions that optimize user experience and
            fuel growth. Proficient in front-end development, back-end
            architecture, I excel at building scalable, responsive interfaces.
            My expertise in React enables me to harness state management, hooks,
            and component-driven design, while Node.js allows me to orchestrate
            efficient server-side logic. I'm poised to deliver impactful web
            solutions that harmonize commerce and technology."
</p>
</div>

<div className="div-two">
  <div className="div-to" >
  <img src="abt.jpg" alt="its a picture" className="pic-two" />
<ul className="ul">
<p className="name-one">Muhammad Arsalan Akbar</p><br />
<p className="name-two">
Having earned a bachlors in commerce , i am now expanding
              my skills in web development and Artifficial Intelligence

</p>

  <Link href=""> <li> <span className="info">~ Birthday : </span>17 feb 1988</li></Link>
  <Link href=""> <li> <span className="info">~ Degree : </span>Baclors in Commerce</li></Link>
  <Link href=""> <li> <span className="info">~ Phone : </span>03352752054</li></Link>
  <Link href=""> <li> <span className="info">~Email :  </span>arsalaanawan1339@gmail.com</li></Link>
  <Link href=""> <li> <span className="info">~ Location : </span>Karachi ,Pakistan</li></Link>

</ul>
<p className="last-para">

Hello, I'm Muhammad Arsalan, and I am passionate about Information technolgy. 
With 1 years of experience in GIAIC, I have developed a
 deep understanding of the industry and have successfully navigated complex challenges
 . I am known for my ability to achievement and my strong leadership skills."
</p>



</div>
</div>
  
  
      </div>
    </main>
  )
}
export default Home
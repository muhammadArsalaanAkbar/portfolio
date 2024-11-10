import "./project.css"
import Header_two from "@/app/components/header-1"
import Link from "next/link"
import Footer from "@/app/components/footer"
function Project(){
  return(
      <main>
        <Header_two/>
       <img src="https://e0.pxfuel.com/wallpapers/894/289/desktop-wallpaper-galaxy-note-7-blue-line-art-pattern-iphone-8-galaxy-note-6.jpg" alt="" className="main-img"/>
      <div className="div-one">
        <div className="head">
          <h1>
            Projects
          </h1>
          <p>
          "Explore my diverse portfolio, featuring projects that showcase my
            web development expertise: utility tools (Calculator, BMI
            Calculator), interactive games (Guessing Game), productivity apps
            (To-Do List), dynamic forms, and secure finance simulations (ATM
            Card Number Generator). Built with HTML, CSS, JavaScript, React, and
            Node.js, these projects demonstrate my passion for innovative
            problem-solving and user-centric design."
          </p>
        </div>
        <div className="projects">
          <div className="pro-list">
<div className="pro-one">
  <img src="https://img.freepik.com/premium-photo/flat-design-illustration-calculator-with-coins-pencil-notebook_1025753-178957.jpg" alt="calculator" className="pro-img" />
  <p className="pro-para"> <a href=""> Calculater </a> </p>
</div>



<div className="pro-one">
  <img src="https://content.instructables.com/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?auto=webp" alt="calculator" className="pro-img" />
  <p className="pro-para"> <a href=""> Number Gussing Game </a> </p>
</div>

<div className="pro-one">
  <img src="https://av.sc.com/ng/content/images/save-debit-cards-infinite-card-masthead.jpg" alt="calculator" className="pro-img" />
  <p className="pro-para"> <a href=""> Atm Card  </a> </p>
</div>

<div className="pro-one">
  <img src="https://img.freepik.com/premium-vector/tic-tac-toe-game-linear-outline-icon-colour-neon-style-brick-wall-background-light-icon_549897-1767.jpg?w=740" alt="calculator" className="pro-img" />
  <p className="pro-para"> <a href=""> Tic Take TOE Game </a> </p>
</div>

<div className="pro-one">
  <img src="https://img.freepik.com/free-photo/register-now-application-information-concept_53876-125162.jpg?t=st=1730218388~exp=1730221988~hmac=1bc27d0e046eb90dd4c5da09243b178b08b291c61b4580e9aee9256266a5228d&w=740" alt="calculator" className="pro-img" />
  <p className="pro-para"> <a href=""> Dynamic  Form </a> </p>
</div>


<div className="pro-one">
  <img src="https://ecommercenews.pe/wp-content/uploads/2022/02/Partes-importantes-en-una-e-commerce-1024x512.jpg" alt="calculator" className="pro-img" />
  <p className="pro-para"> <a href=""> E commerce website </a> </p>
</div>







          </div>
          <p className="para-two">
          Visit my <Link href="https://github.com/muhammadArsalaanAkbar" target="_blank" className=" para font-bold text-red-300">GitHub</Link>  ,<Link href="https://vercel.com/muhammad-arsalan-akars-projects"target="_blank" className=" para font-bold text-red-300">Versal</Link>, or <Link href="" className=" para font-bold text-red-300">npm</Link> profile for
          more notable view of my work.
          </p>

        </div>

 








      </div>
      <Footer/>
      </main>
  )
}
export default Project
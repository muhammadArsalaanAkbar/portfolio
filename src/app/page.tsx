import "./style.css"
import Header from "./components/header"
import TypingEffect from "./components/typing"
function Home(){ 
  return( 
    <main className="main-one">
      <Header/>
      <div className="one">
      
<div className="div-two">
  
  <img src="pro.jpg" alt="" className="picture" />
 <h1 className="intro">     
  </h1>
  {/*
    <h2 className="intro-2"> I Am Business Student and
      Programmer</h2>*/}
       <span className="type"><TypingEffect text= " Arsalan Awan !A  Business Student and A Programmer" speed={400}/></span>

</div>



      </div>
    </main>
  )
}
export default Home
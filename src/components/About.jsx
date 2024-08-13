import { useNavigate } from "react-router-dom"

const About = () => {

  const navigate =   useNavigate();

  const goto = () =>{
    navigate("/contact");
  }

  return (
    <>
      <div>This is the About Page</div>
      <button onClick={()=>goto()}>Go to contact page</button>
      <button onClick={()=>{navigate(-1)}}>GO back</button>
    </>
  )
}

export default About
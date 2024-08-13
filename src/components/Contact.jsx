import { useNavigate } from "react-router-dom"

const Contact = () => {
  const navigate = useNavigate();

  const goto = () => {
    navigate("/")
  }
  return (
    <>
        <div>This is the Contact Page</div>
        <button onClick={()=>goto()}>Go to Home page</button>
        <button onClick={()=>{navigate(-1)}}>GO back</button>

    </>
  )
}

export default Contact
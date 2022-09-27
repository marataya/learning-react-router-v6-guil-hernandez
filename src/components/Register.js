import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
  const emailRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/confirmed', {state:{ email: emailRef.current.value }})
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} className='border border-gray-900' />
        </label>
        <input type="submit" value="Submit" className='border border-gray-900 p-2 mx-5'/>
      </form>
    </div>
  );
}
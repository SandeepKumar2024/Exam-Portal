import "./register.css"

const Register = () => {
  return (
    <div className='register'>
      <h1>Register</h1>
      <div className="containerRegister">
        <form action="">
          <label>Username</label>
          <input type="text" placeholder='Enter username' />
          <label>Email</label>
          <input type="text" placeholder='Enter email' />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='******'/>
          <button className="signin">Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Register

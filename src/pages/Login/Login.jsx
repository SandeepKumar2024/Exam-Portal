import "./Login.css"

const Login = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <div className="containerLogin">
        <form action="">
          <label>Username</label>
          <input type="text" placeholder='Enter username' />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='******'/>
          <button className="signin">Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login

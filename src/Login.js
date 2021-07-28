import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSingup,
    hasAcoount,
    setHasAccount,
    emailError,
    passwordError,
  }= props;
  return(
    <section>
  <div>
  <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={5} style={{ marginTop: '420px', marginBottom: '420px' }}>
          <img
            src="https://4.bp.blogspot.com/-NusT8_BxXvU/WigtjvJvKLI/AAAAAAABOyg/VP7N3f2xgkAOOU2LPKaVCBdTsMiDJp_EgCK4BGAYYCw/s1600/Web-design.jpg"
            width="100%" 
          />
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
            marginTop: '420px',
            marginBottom: '420px'
          }}
        >
         
          <h3>Sign up to your account</h3>
   
    <TextField type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="Your email" variant="outlined" />
    <p>{emailError}</p>
    
    <TextField type="password" required value={password} onChange={e => setPassword(e.target.value)} id="outlined-basic" label="Create Password" variant="outlined"/>
    <p>{passwordError}</p>
    <div>
      {hasAcoount ? (
        <>
        <button onClick={ handleLogin} style={{color:'blue'}}>sign in</button>
        <p>Dont have account ?<span onClick={()=> setHasAccount(!hasAcoount)} style={{color:'blue'}}>sign up</span> </p>
        </>
      ) : (
        <>
        
        <button onClick={handleSingup} style={{color:'blue'}}>sign up</button>
        <p>have an account ?<span onClick={() => setHasAccount(!hasAcoount)} style={{color:'blue'}}> sign in</span></p>
        </>
      )}
    </div>
    </Grid>
    </Grid>
  </div>
      </section>
  );
};
export default Login;
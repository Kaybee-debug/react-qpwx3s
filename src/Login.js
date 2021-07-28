import React from 'react';
import Grid from '@material-ui/core/Grid';
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
         
          <h3>sign up to your account</h3>
    <label>UserName</label>
    <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
    <p>{emailError}</p>
    <label>Password</label>
    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
    <p>{passwordError}</p>
    <div>
      {hasAcoount ? (
        <>
        <button onClick={ handleLogin}>sign in</button>
        <p>Dont have account ?<span onClick={()=> setHasAccount(!hasAcoount)}>sign up</span> </p>
        </>
      ) : (
        <>
        <button onClick={handleSingup}>sign up</button>
        <p>have an account ?<span onClick={() => setHasAccount(!hasAcoount)}> sign in</span></p>
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